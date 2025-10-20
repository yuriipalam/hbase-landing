import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownLayoutProps {
  children: string;
}

export function MarkdownLayout({ children }: MarkdownLayoutProps) {
  return (
      <div className="container mx-auto px-4 py-12">
        <article className="prose prose-slate dark:prose-invert">
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="mt-8 mb-6 text-4xl font-bold">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="mt-8 mb-4 border-b border-gray-200 pb-2 text-3xl font-semibold">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="mt-6 mb-3 text-2xl font-semibold">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="mb-4 text-base leading-7 text-gray-700 dark:text-gray-300">
                  {children}
                </p>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href?.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  {children}
                </a>
              ),
              ol: ({ children }) => (
                <ol className="mb-4 ml-4 list-inside list-decimal space-y-2">
                  {children}
                </ol>
              ),
              ul: ({ children }) => (
                <ul className="mb-4 ml-4 list-inside list-disc space-y-2">
                  {children}
                </ul>
              ),
              li: ({ children }) => (
                <li className="text-gray-700 dark:text-gray-300">{children}</li>
              ),
              code: ({ children, className }) => {
                const isInline = !className;
                if (isInline) {
                  return (
                    <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800">
                      {children}
                    </code>
                  );
                }
                return (
                  <code
                    className={`${className} block overflow-x-auto rounded-lg bg-gray-100 p-4 dark:bg-gray-800`}
                  >
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => (
                <pre className="mb-4 overflow-x-auto rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                  {children}
                </pre>
              ),
              blockquote: ({ children }) => (
                <blockquote className="my-4 border-l-4 border-gray-300 pl-4 text-gray-600 italic dark:border-gray-600 dark:text-gray-400">
                  {children}
                </blockquote>
              )
            }}
          >
            {children}
          </Markdown>
        </article>
      </div>
  );
}
