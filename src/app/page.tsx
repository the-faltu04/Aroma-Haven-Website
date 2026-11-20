import type { Metadata } from "next";
import { draftMenuItems, menuCategories } from "@/data/menu";

export const metadata: Metadata = { title: "Menu" };

export default function MenuPage() {
  return <div className="page"><div className="shell"><p className="eyebrow">The Aroma Haven menu</p><div className="page-title"><h1>Something for<br /><em>every moment.</em></h1><p>From the first cup of the day to a little something sweet at the end. Browse our proposed opening menu.</p></div>
    <div className="notice"><b>i</b><p><strong>Opening menu concept.</strong> Names and prices below are draft suggestions, not confirmed live prices. Every item and price is planned to be editable in the Admin system before the menu goes live. Ingredients, allergen details and availability must be checked before publication.</p></div>
    <div className="category-pills">{menuCategories.map((category) => <span key={category}>{category}</span>)}</div>
    <div className="menu-list">{draftMenuItems.map((item, index) => <article className="menu-row" key={item.name}><span className="menu-index">{String(index + 1).padStart(2, "0")}</span><div><p className="eyebrow">{item.category}</p><h2>{item.name}</h2><p>{item.description}</p></div><div className="menu-price"><small>Proposed</small><strong>₹{item.proposedPriceRupees}</strong></div></article>)}</div>
  </div></div>;
}
