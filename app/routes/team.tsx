import type { Route } from "./+types/team";
import { TeamPage } from "@/pages/team";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Team - HBase Project" },
    {
      name: "description",
      content:
        "Meet the Apache HBase project team members and contributors who develop and maintain HBase."
    }
  ];
}

export default function Team() {
  return <TeamPage />;
}
