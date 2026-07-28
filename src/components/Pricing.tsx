function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      className="mt-[3px] shrink-0 text-[#0FB98F]"
    >
      <path
        d="M3 8.5l3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-[100px] max-sm:py-16">
      <div className="mx-auto max-w-[1180px] px-8 max-sm:px-5">
        <div className="mb-14 max-w-[620px]">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#123EDB] before:inline-block before:h-px before:w-4 before:bg-[#0FB98F]">
            Pricing
          </span>
          <h2 className="mt-4 font-heading text-[36px] leading-[1.15] font-semibold tracking-[-0.02em] max-md:text-[28px]">
            Start free. Upgrade when applying becomes a routine.
          </h2>
          <p className="mt-3.5 text-base text-[#5B6478]">
            Every plan includes autofill and storage. Higher tiers add unlimited use, tailored letters at scale, and coaching.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[22px] lg:grid-cols-3">
          {/* Free */}
          <div className="flex flex-col rounded-[18px] border-[1.5px] border-[#E3E6EF] bg-white p-[30px_26px]">
            <div className="mb-3.5 font-mono text-xs uppercase tracking-[0.06em] text-[#8A91A8]">
              Free
            </div>
            <div className="mb-1 font-heading text-[38px] font-bold">
              $0 <span className="font-body text-sm font-medium text-[#8A91A8]">/ forever</span>
            </div>
            <p className="mb-[22px] text-[13px] text-[#5B6478]">
              For occasional applicants testing the waters.
            </p>
            <ul className="mb-[26px] flex flex-1 flex-col gap-[11px]">
              <PriceFeature text="5 autofilled applications / month" />
              <PriceFeature text="1 stored resume" />
              <PriceFeature text="Basic pipeline tracking" />
            </ul>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] border-[1.5px] border-[#E3E6EF] py-[11px] text-[14.5px] font-semibold text-[#0A1128] transition-all hover:border-[#2151FF] hover:text-[#123EDB]"
            >
              Get started free
            </a>
          </div>

          {/* Pro (featured) */}
          <div className="relative flex flex-col rounded-[18px] border-[1.5px] border-[#2151FF] bg-white p-[30px_26px] shadow-[0_16px_40px_rgba(21,53,150,0.14)]">
            <span className="absolute -top-3 left-[26px] rounded-full bg-gradient-to-br from-[#2151FF] to-[#1FE0B0] px-2.5 py-1.5 font-mono text-[10px] tracking-[0.08em] text-white">
              MOST POPULAR
            </span>
            <div className="mb-3.5 font-mono text-xs uppercase tracking-[0.06em] text-[#8A91A8]">
              Pro
            </div>
            <div className="mb-1 font-heading text-[38px] font-bold">
              $12 <span className="font-body text-sm font-medium text-[#8A91A8]">/ month</span>
            </div>
            <p className="mb-[22px] text-[13px] text-[#5B6478]">
              For anyone actively job searching.
            </p>
            <ul className="mb-[26px] flex flex-1 flex-col gap-[11px]">
              <PriceFeature text="Unlimited autofilled applications" />
              <PriceFeature text="Unlimited stored resumes & versions" />
              <PriceFeature text="Tailored cover letters, per role" />
              <PriceFeature text="Full pipeline tracking & reminders" />
            </ul>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-gradient-to-br from-[#2151FF] to-[#1FE0B0] py-[11px] text-[14.5px] font-semibold text-white shadow-[0_6px_18px_rgba(20,60,180,0.28)] transition-all hover:-translate-y-px hover:shadow-[0_10px_24px_rgba(20,60,180,0.34)]"
            >
              Start 14-day trial
            </a>
          </div>

          {/* Career+ */}
          <div className="flex flex-col rounded-[18px] border-[1.5px] border-[#E3E6EF] bg-white p-[30px_26px]">
            <div className="mb-3.5 font-mono text-xs uppercase tracking-[0.06em] text-[#8A91A8]">
              Career+
            </div>
            <div className="mb-1 font-heading text-[38px] font-bold">
              $29 <span className="font-body text-sm font-medium text-[#8A91A8]">/ month</span>
            </div>
            <p className="mb-[22px] text-[13px] text-[#5B6478]">
              For a focused push toward an offer.
            </p>
            <ul className="mb-[26px] flex flex-1 flex-col gap-[11px]">
              <PriceFeature text="Everything in Pro" />
              <PriceFeature text="1 career coaching session / month" />
              <PriceFeature text="Application analytics & response rates" />
            </ul>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] border-[1.5px] border-[#E3E6EF] py-[11px] text-[14.5px] font-semibold text-[#0A1128] transition-all hover:border-[#2151FF] hover:text-[#123EDB]"
            >
              Start Career+
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceFeature({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-[9px] text-[13.5px] text-[#16213E]">
      <CheckIcon />
      {text}
    </li>
  );
}
