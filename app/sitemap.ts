import type { MetadataRoute } from "next";
import { products, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const routes = [
    "",
    "/produkte",
    "/unternehmen",
    "/referenzen",
    "/service",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-06-16"),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/produkte/${p.slug}`,
    lastModified: new Date("2026-06-16"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...routes, ...productRoutes];
}
