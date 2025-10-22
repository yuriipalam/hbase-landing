import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from "@/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/ui/collapsible";
import { ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router";
import { asfLinks, documentationLinks, projectLinks, docsLinks } from "./links";
import { ThemeToggle } from "./theme-toggle";

const navLinkClass =
  "text-sm font-medium text-foreground/70 hover:text-foreground transition-colors";

export function SiteNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    setIsScrolled(window.scrollY > 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        isScrolled ? "border-border/60" : "border-border/0",
        "bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur transition-[border] duration-200"
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          className="relative z-50 flex items-center gap-3"
          aria-label="HBase Home"
        >
          <img src="/images/logo.svg" alt="Apache HBase logo" width={120} />
          <span className="sr-only">Apache HBase</span>
        </Link>

        {/* Desktop menus */}
        <div className="hidden items-center gap-4 md:flex">
          <ProjectMenu />
          <DocsMenu />
          <AsfMenu />
          <ThemeToggle />
        </div>

        {/* Mobile menu */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}

function ProjectMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`${navLinkClass} inline-flex cursor-pointer items-center`}
        >
          Apache HBase Project <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        {projectLinks.map((item) => (
          <DropdownMenuItem key={item.label} asChild>
            <Link to={item.to} target={item.external ? "_blank" : "_self"}>
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DocsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`${navLinkClass} inline-flex cursor-pointer items-center`}
        >
          Documentation and API <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        {documentationLinks.map((item) =>
          "to" in item ? (
            <DropdownMenuItem key={item.label} asChild>
              <Link
                to={item.to}
                target={item.external ? "_blank" : "_self"}
                aria-label={item.label}
              >
                {item.label}
              </Link>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>{item.label}</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                {item.links.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link to={item.to} aria-label={item.label}>
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          )
        )}
        <DropdownMenuSeparator />
        {docsLinks.map((group) => (
          <DropdownMenuSub key={group.label}>
            <DropdownMenuSubTrigger>{group.label}</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              {group.links.map((item) => (
                <DropdownMenuItem key={item.label} asChild>
                  <Link to={item.to} aria-label={item.label}>
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function AsfMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={`${navLinkClass} inline-flex cursor-pointer`}>
          ASF <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        {asfLinks.map((item) => (
          <DropdownMenuItem key={item.label} asChild>
            <Link
              to={item.to}
              target={item.external ? "_blank" : "_self"}
              aria-label={item.label}
            >
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches && isOpen) {
        setIsOpen(false);
      }
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-foreground relative z-50 p-2"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="flex h-5 w-5 flex-col items-center justify-center">
          <span
            className={cn(
              "bg-foreground absolute h-0.5 w-5 transition-all duration-300",
              isOpen ? "rotate-45" : "-translate-y-1.5"
            )}
          />
          <span
            className={cn(
              "bg-foreground h-0.5 w-5 transition-all duration-300",
              isOpen ? "opacity-0" : "opacity-100"
            )}
          />
          <span
            className={cn(
              "bg-foreground absolute h-0.5 w-5 transition-all duration-300",
              isOpen ? "-rotate-45" : "translate-y-1.5"
            )}
          />
        </div>
      </button>

      {/* Fullscreen overlay - rendered in portal */}
      {isMounted &&
        createPortal(
          <div
            className={cn(
              "bg-background fixed inset-0 z-40 overflow-y-auto transition-all duration-300",
              isOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            )}
          >
            <div className="px-6 pt-24 pb-8">
              <nav className="space-y-4">
                <MobileMenuSection
                  title="Apache HBase Project"
                  links={projectLinks}
                  onLinkClick={() => setIsOpen(false)}
                />
                <MobileDocsSection onLinkClick={() => setIsOpen(false)} />
                <MobileMenuSection
                  title="ASF"
                  links={asfLinks}
                  onLinkClick={() => setIsOpen(false)}
                />
              </nav>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

function MobileDocsSection({ onLinkClick }: { onLinkClick: () => void }) {
  return (
    <Collapsible className="w-full">
      <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-left font-medium">
        Documentation and API
        <ChevronRight className="h-4 w-4 rotate-90 transition-transform group-data-[state=closed]:rotate-0" />
      </CollapsibleTrigger>
      <CollapsibleContent className="w-full space-y-2 pl-4">
        {documentationLinks.map((link) =>
          "to" in link ? (
            <Link
              key={link.label}
              to={link.to}
              target={link.external ? "_blank" : "_self"}
              onClick={onLinkClick}
              className="text-muted-foreground hover:text-foreground flex items-center py-1.5 text-sm"
            >
              {link.label}
              {link.external && <ExternalLink className="ml-1 h-3 w-3" />}
            </Link>
          ) : (
            <Collapsible className="w-full">
              <CollapsibleTrigger className="text-muted-foreground hover:text-foreground flex w-full items-center justify-between py-1.5 text-left text-sm">
                {link.label}
                <ChevronRight
                  className={cn(
                    "h-3 w-3 rotate-90 transition-transform group-data-[state=closed]:rotate-0"
                  )}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="w-full space-y-1 pl-3">
                {link.links.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="text-muted-foreground hover:text-foreground flex items-center py-1 text-xs"
                  >
                    {item.label}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>
          )
        )}
        <div className="border-border/40 my-2 border-t pt-2">
          {docsLinks.map((group) => (
            <Collapsible key={group.label} className="w-full">
              <CollapsibleTrigger className="text-muted-foreground hover:text-foreground flex w-full items-center justify-between py-1.5 text-left text-sm">
                {group.label}
                <ChevronRight className="h-3 w-3 rotate-90 transition-transform group-data-[state=closed]:rotate-0" />
              </CollapsibleTrigger>
              <CollapsibleContent className="w-full space-y-1 pl-3">
                {group.links.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="text-muted-foreground hover:text-foreground flex items-center py-1 text-xs"
                    aria-label={item.label}
                  >
                    {item.label}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function MobileMenuSection({
  title,
  links,
  onLinkClick
}: {
  title: string;
  links: typeof projectLinks;
  onLinkClick: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-left font-medium">
        {title}
        <ChevronRight
          className={cn("h-4 w-4 transition-transform", isOpen && "rotate-90")}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="w-full space-y-2 pl-4">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            target={link.external ? "_blank" : "_self"}
            onClick={onLinkClick}
            className="text-muted-foreground hover:text-foreground flex items-center py-1.5 text-sm"
          >
            {link.label}
            {link.external && <ExternalLink className="ml-1 h-3 w-3" />}
          </Link>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
