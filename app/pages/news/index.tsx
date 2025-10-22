import { MarkdownLayout } from "@/components/markdown-layout";
import { Calendar } from "lucide-react";
import content from "./content.md?raw";

export function NewsPage() {
  return (
    <MarkdownLayout
      components={{
        p: ({ children }) => {
          // Check if this paragraph contains a news item (starts with bold date)
          if (!Array.isArray(children)) {
            return <p className="mb-4 text-base leading-7">{children}</p>;
          }

          // Look for the pattern: **Date** - Content
          const firstChild = children[0];
          const hasDatePattern =
            firstChild &&
            typeof firstChild === "object" &&
            firstChild.type === "strong";

          if (hasDatePattern) {
            // Extract date from the strong tag
            const dateText = firstChild.props?.children;
            // Everything after the date
            const restContent = children.slice(1);

            return (
              <div className="group border-border bg-card hover:border-primary/50 relative mb-4 rounded-lg border p-4 transition-all hover:shadow-md">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Calendar className="text-muted-foreground size-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-muted-foreground mt-0.5 mb-1 text-sm font-semibold">
                      {dateText}
                    </div>
                    <div className="text-base leading-7">{restContent}</div>
                  </div>
                </div>
              </div>
            );
          }

          // Default paragraph for non-news items
          return <p className="mb-4 text-base leading-7">{children}</p>;
        }
      }}
    >
      {content}
    </MarkdownLayout>
  );
}
