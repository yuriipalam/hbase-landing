import { MarkdownLayout } from "@/components/markdown-layout";
import content from "./content.md?raw";

export function OtherResourcesPage() {
  return <MarkdownLayout>{content}</MarkdownLayout>;
}

