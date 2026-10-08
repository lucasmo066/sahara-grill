export default function Loading() {
  return (
    <main
      id="main-content"
      className="site-container section-space flex min-h-[60vh] flex-col items-center justify-center gap-6"
      aria-busy="true"
    >
      <div
        aria-hidden="true"
        className="h-12 w-12 rounded-full border-2 border-border border-t-primary motion-safe:animate-spin"
      />
      <p role="status" className="text-lg text-muted-foreground">
        Loading…
      </p>
    </main>
  );
}
