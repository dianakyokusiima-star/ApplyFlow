export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Upload",
      desc: "Upload your resume once. ApplyFlow parses it into fields it can reuse — name, work history, education, links, everything.",
      tag: "One-time setup",
    },
    {
      num: "02",
      title: "Autofill",
      desc: "Open any application. ApplyFlow matches your stored fields to the form and fills it in seconds, on nearly any ATS.",
      tag: "~3 sec per form",
    },
    {
      num: "03",
      title: "Generate",
      desc: "For every role, ApplyFlow drafts a cover letter tailored to the job description and your resume. Edit it, or send as-is.",
      tag: "Tailored per role",
    },
    {
      num: "04",
      title: "Track",
      desc: "Every application lands in your pipeline automatically — Saved, Applied, Interview, Offer — so you know what's next.",
      tag: "Always current",
    },
  ];

  return (
    <section id="how" className="py-[100px] max-sm:py-16">
      <div className="mx-auto max-w-[1180px] px-8 max-sm:px-5">
        <div className="mb-14 max-w-[620px]">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#123EDB] before:inline-block before:h-px before:w-4 before:bg-[#0FB98F]">
            How it works
          </span>
          <h2 className="mt-4 font-heading text-[36px] leading-[1.15] font-semibold tracking-[-0.02em] max-md:text-[28px]">
            One flow. Four steps.
          </h2>
          <p className="mt-3.5 text-base text-[#5B6478]">
            From resume to offer, ApplyFlow handles the busywork so you can focus on landing the right role.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line */}
          <div className="absolute top-[26px] left-0 right-0 hidden h-px bg-[#E3E6EF] lg:block" />

          {steps.map((step) => (
            <div key={step.num} className="relative z-1 pr-7">
              <div className="mb-[22px] flex h-[52px] w-[52px] items-center justify-center rounded-full border-[1.5px] border-[#E3E6EF] bg-white font-mono text-sm font-medium text-[#123EDB] transition-all hover:border-[#2151FF] hover:shadow-[0_0_0_5px_rgba(33,81,255,0.08)]">
                {step.num}
              </div>
              <h3 className="mb-2.5 font-heading text-lg font-semibold tracking-[-0.02em]">
                {step.title}
              </h3>
              <p className="text-[14.5px] text-[#5B6478]">{step.desc}</p>
              <span className="mt-3.5 inline-block rounded-full bg-[rgba(31,224,176,0.1)] px-[9px] py-1 font-mono text-[11px] text-[#0FB98F]">
                {step.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
