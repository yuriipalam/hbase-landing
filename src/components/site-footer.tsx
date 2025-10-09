export function SiteFooter() {
  return (
    <footer className="border-border/60 mt-16">
      <div className="text-muted-foreground mx-auto max-w-6xl px-4 py-10 text-sm">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-foreground font-medium">Apache HBase</p>
            <p className="mt-2">
              Open-source, distributed, and scalable big data store modeled
              after Google Bigtable.
            </p>
          </div>
          <div>
            <p className="text-foreground font-medium">Get Started</p>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#download" className="hover:text-foreground">
                  Download
                </a>
              </li>
              <li>
                <a href="#documentation" className="hover:text-foreground">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-foreground">
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-foreground font-medium">Community</p>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="/" className="hover:text-foreground">
                  Mailing Lists
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-foreground">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-foreground">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-border/60 my-8" />

        <p className="text-xs leading-6">
          Copyright ©2007–2025 The Apache Software Foundation. All rights
          reserved. Apache HBase, HBase, Apache, the Apache HBase logo and the
          ASF logo are either registered trademarks or trademarks of the Apache
          Software Foundation. All other marks mentioned may be trademarks or
          registered trademarks of their respective owners.
        </p>
      </div>
    </footer>
  );
}
