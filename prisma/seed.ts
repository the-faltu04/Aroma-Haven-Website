import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { draftMenuItems } from "../src/data/menu";
import { siteMedia } from "../src/data/site-media";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required to seed the database.");
}

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.storeSettings.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      onlineOrdering24x7: true,
      orderAcceptanceMode: "MANUAL",
      deliveryFeePaise: 4000,
      freeDeliveryAbovePaise: 49900,
      taxConfigurationStatus: "PENDING_CONFIRMATION",
      loyaltyRulesStatus: "NOT_CONFIGURED"
    }
  });

  for (const [key, media] of Object.entries(siteMedia)) {
    await prisma.siteMediaSlot.upsert({
      where: { key },
      update: { title: media.title, altText: media.alt },
      create: { key, title: media.title, altText: media.alt, focalX: 50, focalY: 50 }
    });
  }

  for (let number = 1; number <= 50; number += 1) {
    const label = `Table ${String(number).padStart(2, "0")}`;
    await prisma.cafeTable.upsert({
      where: { tableNumber: number },
      update: {},
      create: { tableNumber: number, label, seatingCapacity: 2, isActive: true }
    });
  }

  const categories = [...new Set(draftMenuItems.map((item) => item.category))];
  const categoryIds = new Map<string, string>();
  for (const [sortOrder, name] of categories.entries()) {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const category = await prisma.menuCategory.upsert({
      where: { slug },
      update: {},
      create: { name, slug, sortOrder }
    });
    categoryIds.set(name, category.id);
  }

  for (const item of draftMenuItems) {
    const slug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const categoryId = categoryIds.get(item.category);
    if (!categoryId) throw new Error(`Missing menu category for ${item.name}`);
    await prisma.product.upsert({
      where: { slug },
      update: {},
      create: {
        categoryId,
        name: item.name,
        slug,
        description: item.description,
        pricePaise: item.proposedPriceRupees * 100,
        isPublished: false,
        isAvailable: false
      }
    });
  }
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (error: unknown) => {
    console.error(error);
    await prisma.$disconnect();
    process.exitCode = 1;
  });
