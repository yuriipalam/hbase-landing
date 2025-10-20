import type { Route } from "./+types/downloads";
import { DownloadsPage } from "@/pages/downloads";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Downloads - HBase Project" },
    {
      name: "description",
      content:
        "Download Apache HBase releases, connectors, and operator tools with verification hashes and signatures."
    }
  ];
}

export default function Downloads() {
  return <DownloadsPage />;
}
