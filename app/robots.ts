import type { MetadataRoute } from "next";

// Agentur-Demo: bewusst komplett von der Indexierung ausgeschlossen.
// Vor dem echten Livegang auf { allow: "/" } + Sitemap-Eintrag zurückstellen.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
