import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("code-of-conduct", "routes/code-of-conduct.tsx")
] satisfies RouteConfig;
