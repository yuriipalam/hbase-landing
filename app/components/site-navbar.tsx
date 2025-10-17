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
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { asfLinks, documentationLinks, projectLinks } from "./links";

const navLinkClass =
  "text-sm font-medium text-foreground/70 hover:text-foreground transition-colors";

export function SiteNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

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
        "bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b backdrop-blur transition-[border] duration-200"
      )}
    >
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
          <ProjectMenu />
          <DocsMenu />
          <AsfMenu />
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
            <Link to={item.to}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DocsMenu() {
  type DocumentationOptions =
    | "ref"
    | "refPdf"
    | "userApi"
    | "userApiTest"
    | "devApi"
    | "devApiTest";

  const documentationOptionLabels: Record<DocumentationOptions, string> = {
    ref: "Reference Guide",
    refPdf: "Reference Guide (PDF)",
    userApi: "User API",
    userApiTest: "User API (Test)",
    devApi: "Developer API",
    devApiTest: "Developer API (Test)"
  };

  const getDocsURL = (version: string, option: DocumentationOptions) => {
    const baseUrl = "https://hbase.apache.org/";
    switch (option) {
      case "ref":
        return `${baseUrl}${version}/book.html`;
      case "refPdf":
        return `${baseUrl}${version}/book.pdf`;
      case "userApi":
        return `${baseUrl}${version}/apidocs/index.html`;
      case "userApiTest":
        return `${baseUrl}${version}/testapidocs/index.html`;
      case "devApi":
        return `${baseUrl}${version}/devapidocs/index.html`;
      case "devApiTest":
        return `${baseUrl}${version}/testdevapidocs/index.html`;
    }
  };

  const docItems: Record<string, DocumentationOptions[]> = {
    "1.4": ["ref", "refPdf", "userApi", "userApiTest"],
    "2.3": ["ref", "refPdf", "userApi", "userApiTest", "devApi", "devApiTest"],
    "2.4": ["ref", "refPdf", "userApi", "userApiTest", "devApi", "devApiTest"],
    "2.5": ["userApi", "userApiTest", "devApi", "devApiTest"],
    "2.6": ["userApi", "userApiTest", "devApi", "devApiTest"]
  };

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
        {documentationLinks.map((item) => (
          <DropdownMenuItem key={item.label} asChild>
            <Link to={item.to} aria-label={item.label}>
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        {Object.keys(docItems).map((version) => (
          <DropdownMenuSub key={version}>
            <DropdownMenuSubTrigger>
              {version} Documentation
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              {docItems[version].map((item) => (
                <DropdownMenuItem key={item} asChild>
                  <Link
                    to={getDocsURL(version, item)}
                    aria-label={documentationOptionLabels[item]}
                  >
                    {documentationOptionLabels[item]}
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
            <Link to={item.to} aria-label={item.label}>
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
