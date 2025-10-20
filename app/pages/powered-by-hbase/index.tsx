import { MarkdownLayout } from "@/components/markdown-layout";
import content from "./content.md?raw";

export function PoweredByHBasePage() {
  return <MarkdownLayout>{content}</MarkdownLayout>;
}

