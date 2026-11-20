import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: { default: "Aroma Haven Café | Served With Love & Quality", template: "%s | Aroma Haven Café" },
  description: "A warm, thoughtfully crafted café experience in Motihari, Bihar.",
  applicationName: "Aroma Haven Café",
  metadataBase: new URL(process.env.APP_URL ?? "http://localhost:3000"),
  openGraph: { title: "Aroma Haven Café", description: "Served With Love & Quality !!", type: "website", locale: "en_IN" }
};

export const viewport: Viewport = { themeColor: "#17110e", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en-IN"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
