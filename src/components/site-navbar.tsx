import { Button } from "@/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from "@/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const navLinkClass =
  "text-sm font-medium text-foreground/70 hover:text-foreground transition-colors";

export function SiteNavbar() {
  return (
    <header className="border-border/60 bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="/" className="flex items-center gap-3" aria-label="HBase Home">
          <img
            src="/images/logo.png"
            alt="Apache HBase logo"
            width={120}
            height={28}
          />
          <span className="sr-only">Apache HBase</span>
        </a>

        {/* Desktop menus */}
        <div className="hidden items-center gap-4 md:flex">
          <ProjectMenu />
          <DocsMenu />
          <AsfMenu />
        </div>

        {/* Mobile menus */}
        <div className="flex items-center gap-1 md:hidden">
          <ProjectMenu compact />
          <DocsMenu compact />
          <AsfMenu compact />
        </div>
      </nav>
    </header>
  );
}

function ProjectMenu({ compact = false }: { compact?: boolean }) {
  const trigger = compact ? (
    <Button variant="ghost" size="sm" className="px-2">
      <span className="sr-only">Project</span>
      <span aria-hidden>Project</span>
      <ChevronDown className="ml-1 h-4 w-4" />
    </Button>
  ) : (
    <button
      className={`${navLinkClass} inline-flex cursor-pointer items-center`}
    >
      Project <ChevronDown className="ml-1 h-4 w-4" />
    </button>
  );

  const items = [
    "Overview",
    "License",
    "Downloads",
    "Release Notes",
    "Code of Conduct",
    "Mailing Lists",
    "Team",
    "HBase Sponsors",
    "Thanks",
    "Powered by HBase",
    "Other Resources"
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {items.map((item) => (
          <DropdownMenuItem key={item} asChild>
            <a href="/">{item}</a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DocsMenu({ compact = false }: { compact?: boolean }) {
  const trigger = compact ? (
    <Button variant="ghost" size="sm" className="px-2">
      <span className="sr-only">Documentation and API</span>
      <span aria-hidden>Docs</span>
      <ChevronDown className="ml-1 h-4 w-4" />
    </Button>
  ) : (
    <button
      className={`${navLinkClass} inline-flex cursor-pointer items-center`}
    >
      Documentation and API <ChevronDown className="ml-1 h-4 w-4" />
    </button>
  );

  const baseDocs = [
    "Reference Guide",
    "Reference Guide (PDF)",
    "Getting Started",
    "User API"
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {baseDocs.map((item) => (
          <DropdownMenuItem key={item} asChild>
            <a href="#documentation" aria-label={item}>
              {item}
            </a>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>2.6 Documentation</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {baseDocs.map((item) => (
              <DropdownMenuItem key={`2.6-${item}`} asChild>
                <a href="#documentation" aria-label={`2.6 ${item}`}>
                  {item}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function AsfMenu({ compact = false }: { compact?: boolean }) {
  const trigger = compact ? (
    <Button variant="ghost" size="sm" className="cursor-pointer px-2">
      <span className="sr-only">ASF</span>
      <span aria-hidden>ASF</span>
      <ChevronDown className="ml-1 h-4 w-4" />
    </Button>
  ) : (
    <button className={`${navLinkClass} inline-flex cursor-pointer`}>
      ASF <ChevronDown className="ml-1 h-4 w-4" />
    </button>
  );

  const items = [
    "Apache Software Foundation",
    "How Apache Works",
    "Sponsoring Apache",
    "Privacy Policy"
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items.map((item) => (
          <DropdownMenuItem key={item} asChild>
            <a href="/">{item}</a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
