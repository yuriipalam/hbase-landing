import type { Route } from "./+types/code-of-conduct";
import { CodeOfConductPage } from "@/pages/code-of-conduct";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Code of Conduct - HBase Project" },
    {
      name: "description",
      content:
        "Code of Conduct and Diversity Statement for the HBase project community."
    }
  ];
}

export default function CodeOfConduct() {
  return <CodeOfConductPage />;
}
