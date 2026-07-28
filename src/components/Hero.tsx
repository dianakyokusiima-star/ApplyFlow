export function Hero() {
  return (
    <section className="overflow-hidden pb-[60px] pt-[88px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 px-8 lg:grid-cols-2">
        {/* Left column */}
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#123EDB] before:inline-block before:h-px before:w-4 before:bg-[#0FB98F]">
            Job application autofill
          </span>
          <h1 className="my-5 font-heading text-[52px] leading-[1.06] font-semibold tracking-[-0.02em] max-md:text-[38px]">
            Stop retyping your resume.
            <br />
            <span className="bg-gradient-to-br from-[#2151FF] to-[#1FE0B0] bg-clip-text text-transparent">
              Start applying.
            </span>
          </h1>
          <p className="mb-8 max-w-[480px] text-[17.5px] leading-relaxed text-[#5B6478]">
            ApplyFlow fills out job applications from your stored resume, drafts a cover letter tailored to the role, and tracks every application in one place — so applying to ten jobs takes as long as one.
          </p>
          <div className="mb-9 flex flex-wrap gap-3.5">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-gradient-to-br from-[#2151FF] to-[#1FE0B0] px-[22px] py-[11px] text-[14.5px] font-semibold text-white shadow-[0_6px_18px_rgba(20,60,180,0.28)] transition-all hover:-translate-y-px hover:shadow-[0_10px_24px_rgba(20,60,180,0.34)]"
            >
              Get started free
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center gap-2 rounded-[10px] border-[1.5px] border-[#E3E6EF] px-[22px] py-[11px] text-[14.5px] font-semibold text-[#0A1128] transition-all hover:border-[#2151FF] hover:text-[#123EDB]"
            >
              See how it works
            </a>
          </div>
          <div className="flex flex-wrap gap-[26px] border-t border-[#E3E6EF] pt-[22px]">
            <div className="font-mono text-[12.5px] text-[#8A91A8]">
              <strong className="font-semibold text-[#16213E]">18,400+</strong> applications autofilled
            </div>
            <div className="font-mono text-[12.5px] text-[#8A91A8]">
              <strong className="font-semibold text-[#16213E]">40 min</strong> saved per week, on average
            </div>
            <div className="font-mono text-[12.5px] text-[#8A91A8]">
              Works on <strong className="font-semibold text-[#16213E]">1,200+</strong> ATS sites
            </div>
          </div>
        </div>

        {/* Right column - Browser mockup */}
        <div className="relative">
          <div className="absolute -top-20 -right-24 z-0 h-[340px] w-[340px] rounded-full bg-gradient-to-br from-[#2151FF] to-[#1FE0B0] opacity-12 blur-[60px]" />
          <span className="absolute -top-4 right-[22px] z-10 flex items-center gap-[7px] rounded-full bg-[#0A1128] px-3.5 py-2 font-mono text-[11.5px] text-white shadow-[0_10px_24px_rgba(10,17,40,0.28)] sm:opacity-100">
            <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-[#1FE0B0] shadow-[0_0_0_rgba(31,224,176,0.5)]" />
            Filled in 3.2s
          </span>
          <div className="relative overflow-hidden rounded-[18px] border border-[#E3E6EF] bg-white shadow-[0_12px_32px_rgba(21,53,150,0.16)]">
            {/* Browser bar */}
            <div className="flex items-center gap-2 border-b border-[#E3E6EF] bg-[#F0F2F8] px-4 py-3">
              <span className="h-[9px] w-[9px] rounded-full bg-[#D5D9E5]" />
              <span className="h-[9px] w-[9px] rounded-full bg-[#D5D9E5]" />
              <span className="h-[9px] w-[9px] rounded-full bg-[#D5D9E5]" />
              <div className="ml-1.5 flex-1 rounded-md border border-[#E3E6EF] bg-white px-2.5 py-1.5 font-mono text-[11.5px] text-[#8A91A8]">
                careers.northwind-labs.com/apply
              </div>
            </div>
            {/* Form body */}
            <div className="px-[26px] py-6">
              <div className="mb-4 text-[13px] font-medium text-[#8A91A8]">
                Application — Senior Product Designer
              </div>

              <FormField label="Full name" text="Amara Osei" />
              <FormField label="Email" text="amara.osei@gmail.com" />
              <FormField label="Current employer" text="Currently at Studio Ferra" />
              <FormField
                label="Why this role"
                text="Excited by Northwind's focus on accessible fintech — my past three years shipping design systems align closely with this role."
                isTextarea
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  text,
  isTextarea,
}: {
  label: string;
  text: string;
  isTextarea?: boolean;
}) {
  return (
    <div className="mb-3.5">
      <label className="mb-1.5 block font-mono text-[10.5px] uppercase tracking-[0.06em] text-[#8A91A8]">
        {label}
      </label>
      <div
        className={`relative flex items-center rounded-lg border-[1.5px] border-[#1FE0B0] bg-[#FBFCFE] px-2.5 text-[13px] text-[#16213E] ${
          isTextarea ? "h-[52px] items-start pt-2" : "h-[34px]"
        }`}
      >
        <span>{text}</span>
        <span className="absolute right-2 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full bg-[#1FE0B0]">
          <svg viewBox="0 0 12 12" fill="none" className="h-[9px] w-[9px]">
            <path
              d="M2 6.5L4.5 9L10 3"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
