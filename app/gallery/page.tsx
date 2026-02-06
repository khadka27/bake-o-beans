import { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Bake O Beans Café - Our Atmosphere In Pokhara",
  description:
    "Explore the warm and inviting atmosphere of Bake O Beans Café. Browse photos of our coffee, artisan pastries, and cozy space in Simalchaur, Pokhara-8.",
  keywords:
    "Bake O Beans gallery, café photos Pokhara, Simalchaur coffee shop interior, Pokhara café atmosphere, coffee photography Nepal",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
