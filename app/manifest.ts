import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LocalDoor Marketing",
    short_name: "LocalDoor",
    description:
      "Premium direct mail and print for local growth — nationwide. Custom postcard and print design, route-based EDDM print and mail, and fully managed campaigns.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF7",
    theme_color: "#9333EA",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
