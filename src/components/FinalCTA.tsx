export function FinalCTA() {
  return (
    <section className="flex flex-col items-center px-8 py-[110px] text-center max-sm:py-16">
      <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#123EDB] before:inline-block before:h-px before:w-4 before:bg-[#0FB98F]">
        Ready when you are
      </span>
      <h2 className="mx-auto mt-[18px] mb-[30px] max-w-[620px] font-heading text-[42px] leading-[1.15] font-semibold tracking-[-0.02em] max-sm:text-[30px]">
        Your next offer starts with the first form you don't have to fill out.
      </h2>
      <div className="flex gap-3.5">
        <a
          href="#pricing"
          className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-gradient-to-br from-[#2151FF] to-[#1FE0B0] px-[22px] py-[11px] text-[14.5px] font-semibold text-white shadow-[0_6px_18px_rgba(20,60,180,0.28)] transition-all hover:-translate-y-px hover:shadow-[0_10px_24px_rgba(20,60,180,0.34)]"
        >
          Get started free
        </a>
        <a
          href="#how"
          className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#0A1128] px-[22px] py-[11px] text-[14.5px] font-semibold text-white transition-all hover:bg-[#16213E]"
        >
          See how it works
        </a>
      </div>
    </section>
  );
}
