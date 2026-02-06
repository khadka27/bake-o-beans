import { Metadata } from "next";
import MenuClient from "./MenuClient";

export const metadata: Metadata = {
  title: "Menu | Bake O Beans Café - Coffee, Bakery & More in Pokhara",
  description:
    "Explore the full menu of Bake O Beans Café in Simalchaur, Pokhara. From handcrafted espresso and matcha to freshly baked croissants and local favorites.",
  keywords:
    "Bake O Beans menu, coffee prices Pokhara, best bakery items Pokhara, Simalchaur café food, breakfast Pokhara, pastries Pokhara",
  openGraph: {
    title: "Our Full Menu | Bake O Beans Café Simalchaur, Pokhara",
    description: "Check out our latest coffee and bakery offerings in Pokhara.",
  },
  alternates: {
    canonical: "/menu",
  },
};

export default function MenuPage() {
  return <MenuClient />;
}
