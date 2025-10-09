import { Button } from "@/ui/button";
import { ArrowUpRight, MoveUpRight, SquareArrowOutUpRight } from "lucide-react";

export function CommunitySection() {
  return (
    <section id="community">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              A Vibrant Community
            </h2>
            <p className="text-muted-foreground mt-3">
              HBase is a top-level Apache project with an active community of
              users and contributors. Join discussions, read the reference
              guide, and help shape the roadmap.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-primary text-white hover:opacity-90"
              >
                <a href="/">Mailing Lists</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/">Contribute</a>
              </Button>
              <Button asChild variant="ghost">
                <a href="/">Code of Conduct</a>
              </Button>
            </div>
          </div>
          <ul className="grid gap-3 text-sm leading-6">
            <li id="news" className="relative p-0">
              <a
                href="#news"
                className="border-border/60 bg-background hover:border-primary focus-visible:ring-primary block rounded-lg border p-4 transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                <span className="text-foreground font-medium">
                  News &amp; Events
                </span>
                <p className="text-muted-foreground">
                  HBaseCon and community meetups worldwide.
                </p>
                <ArrowUpRight className="text-muted-foreground absolute top-2.5 right-2.5 size-4" />
              </a>
            </li>
            <li id="sponsors" className="relative p-0">
              <a
                href="#sponsors"
                className="border-border/60 bg-background hover:border-primary focus-visible:ring-primary block rounded-lg border p-4 transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                <span className="text-foreground font-medium">Sponsors</span>
                <p className="text-muted-foreground">
                  Thanks to organizations supporting the project.
                </p>
                <ArrowUpRight className="text-muted-foreground absolute top-2.5 right-2.5 size-4" />
              </a>
            </li>
            <li id="security" className="relative p-0">
              <a
                href="#security"
                className="border-border/60 bg-background hover:border-primary focus-visible:ring-primary block rounded-lg border p-4 transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                <span className="text-foreground font-medium">Security</span>
                <p className="text-muted-foreground">
                  See the Reference Guide security chapter.
                </p>
                <ArrowUpRight className="text-muted-foreground absolute top-2.5 right-2.5 size-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
