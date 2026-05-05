export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-6">
        <p className="text-xs uppercase tracking-[0.25em] text-soft">
          2104Events · Oslo
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Scaffold ready.
        </h1>
        <p className="text-mid leading-relaxed">
          Next.js 16 + Tailwind v4 + Lenis. Add photos to{" "}
          <code className="bg-off px-1.5 py-0.5 rounded">/public/images</code>{" "}
          and we&apos;ll build the sections.
        </p>
        <p className="text-xs text-soft pt-4">
          Ebbellsgata 4, Oslo · +47 94 82 56 61 · @2104eventsbyjose
        </p>
      </div>
    </div>
  );
}
