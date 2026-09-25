import { createFileRoute } from "@tanstack/react-router";
import { ECard } from "@/components/ecard/ECard";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Graficolor · Litografía y Diseño en Santa Marta" },
      { name: "description", content: "E-Card oficial de Graficolor SM. Impresión, diseño y soluciones gráficas en Santa Marta, Colombia." },
      { property: "og:title", content: "Graficolor · Litografía y Diseño" },
      { property: "og:description", content: "Imprimimos tus ideas. Contacta a Graficolor SM, conoce sus servicios y solicita una cotización." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alexdjp15.github.io/graficolor-connect/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#111014" },
    ],
    links: [{ rel: "canonical", href: "https://alexdjp15.github.io/graficolor-connect/" }],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <ECard />;
}
