import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://faltandossemanas.com",
			lastModified: new Date("2026-03-06"),
			changeFrequency: "daily",
			priority: 1,
		},
	];
}