import { Button } from "@/ui/button";

export function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <img
            src="/images/big-logo.png"
            alt="Apache HBase logo with orca"
            width={420}
            height={100}
            className="h-auto w-[260px] md:w-[420px]"
          />

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            The Hadoop Database
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg text-pretty md:text-xl">
            A distributed, scalable, big data store for random, realtime
            read/write access.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {/* Use default variant which is brand red; hover stays brand red via button.tsx */}
            <Button asChild size="lg">
              <a href="#download">Download HBase</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#documentation">Read Documentation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
