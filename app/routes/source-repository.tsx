import type { Route } from "./+types/source-repository";
import { SourceRepositoryPage } from "@/pages/source-repository";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Source Repository - HBase Project" },
    { 
      name: "description", 
      content: "Access the Apache HBase source code repository." 
    }
  ];
}

export default function SourceRepository() {
  return <SourceRepositoryPage />;
}

