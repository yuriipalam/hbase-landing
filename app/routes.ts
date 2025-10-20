import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("code-of-conduct", "routes/code-of-conduct.tsx"),
  route("downloads", "routes/downloads.tsx"),
  route("mailing-lists", "routes/mailing-lists.tsx"),
  route("team", "routes/team.tsx"),
  route("sponsors", "routes/sponsors.tsx"),
  route("powered-by-hbase", "routes/powered-by-hbase.tsx")
] satisfies RouteConfig;
