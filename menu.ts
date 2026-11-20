export type DraftMenuItem = {
  name: string;
  category: string;
  description: string;
  proposedPriceRupees: number;
};

// Proposed starter concepts only. Verify recipes, portion sizes, ingredients, allergens and prices before publishing.
export const draftMenuItems: DraftMenuItem[] = [
  { name: "Classic Cappuccino", category: "Coffee", description: "Espresso with a soft, velvety milk finish.", proposedPriceRupees: 150 },
  { name: "Hazelnut Latte", category: "Coffee", description: "A smooth latte with a gentle hazelnut note.", proposedPriceRupees: 190 },
  { name: "Masala Chai", category: "Tea", description: "A comforting cup with warming spices.", proposedPriceRupees: 90 },
  { name: "Iced Mocha", category: "Cold Coffee", description: "Chilled coffee with cocoa and milk.", proposedPriceRupees: 190 },
  { name: "Belgian Chocolate Shake", category: "Shakes", description: "A rich, cool chocolate shake.", proposedPriceRupees: 210 },
  { name: "Mint Lime Cooler", category: "Mocktails", description: "A bright, refreshing lime and mint cooler.", proposedPriceRupees: 160 },
  { name: "Seasonal Fresh Juice", category: "Fresh Juices", description: "Freshly prepared with the seasonal fruit selection.", proposedPriceRupees: 150 },
  { name: "Margherita Pizza", category: "Pizza", description: "Tomato, mozzarella and aromatic herbs.", proposedPriceRupees: 260 },
  { name: "Penne Arrabbiata", category: "Pasta", description: "Penne tossed in a gently spiced tomato sauce.", proposedPriceRupees: 270 },
  { name: "Classic Veg Burger", category: "Burgers", description: "A seasoned vegetable patty with crisp greens.", proposedPriceRupees: 190 },
  { name: "Grilled Cheese Sandwich", category: "Sandwiches", description: "Golden toasted bread with a melted cheese centre.", proposedPriceRupees: 180 },
  { name: "Peri Peri Fries", category: "Fries", description: "Crisp fries with a lively peri peri seasoning.", proposedPriceRupees: 140 },
  { name: "Loaded Nachos", category: "Snacks", description: "Crunchy nachos with a savoury topping.", proposedPriceRupees: 190 },
  { name: "Tiramisu Cup", category: "Desserts", description: "A layered coffee-inspired dessert concept.", proposedPriceRupees: 220 },
  { name: "Chocolate Truffle Cake", category: "Cakes", description: "A rich chocolate cake slice.", proposedPriceRupees: 180 },
  { name: "Coffee & Croissant", category: "Combos", description: "A coffee paired with a buttery croissant.", proposedPriceRupees: 230 },
  { name: "Chef's Seasonal Plate", category: "Specials", description: "A rotating item selected by the café team.", proposedPriceRupees: 240 },
  { name: "Today's Special", category: "Today's Special", description: "A daily feature configured by the café team.", proposedPriceRupees: 250 },
  { name: "Breakfast Toast Plate", category: "Breakfast", description: "A simple toast plate for an easy start.", proposedPriceRupees: 170 }
];

export const menuCategories = [
  "All", "Breakfast", "Coffee", "Tea", "Cold Coffee", "Shakes", "Mocktails",
  "Fresh Juices", "Pizza", "Pasta", "Burgers", "Sandwiches", "Fries",
  "Snacks", "Desserts", "Cakes", "Combos", "Specials", "Today's Special"
] as const;
