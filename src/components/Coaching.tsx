export function Coaching() {
  const coaches = [
    { initials: "JT", name: "Jordan Teague", role: "Ex-hiring manager, product", rate: "$85/session" },
    { initials: "RM", name: "Rina Mensah", role: "Interview & negotiation coach", rate: "$95/session" },
    { initials: "DK", name: "David Kowalski", role: "Resume & ATS specialist", rate: "$70/session" },
  ];

  return (
    <section id="coaching" className="pt-5 pb-[100px] max-sm:pb-16">
      <div className="relative mx-8 overflow-hidden rounded-[28px] bg-[#0A1128] px-14 py-[72px] text-white max-sm:mx-4 max-sm:px-7 max-sm:py-12">
        {/* Background blur */}
        <div className="pointer-events-none absolute -right-24 -bottom-40 z-0 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#2151FF] to-[#1FE0B0] opacity-[0.18] blur-[90px]" />

        <div className="relative z-1 grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#1FE0B0] before:inline-block before:h-px before:w-4 before:bg-[#1FE0B0]">
              Career coaching
            </span>
            <h2 className="my-4 font-heading text-[32px] leading-[1.15] font-semibold tracking-[-0.02em] text-white">
              Succeed with a coach in your corner.
            </h2>
            <p className="mb-[26px] max-w-[460px] text-[15.5px] text-[#B7BDD4]">
              Autofill gets applications out faster. Our partner coaches help you get the offer — book resume reviews, mock interviews, and negotiation prep straight from your dashboard.
            </p>
            <ul className="mb-8 flex flex-col gap-3">
              {[
                "Vetted coaches, matched to your industry and level",
                "Sessions booked directly against your open applications",
                "One session included free on the Career+ plan",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14.5px] text-[#DADEEC]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="mt-[3px] shrink-0"
                  >
                    <circle cx="8" cy="8" r="7.5" stroke="#1FE0B0" />
                    <path
                      d="M5 8l2 2 4-4.5"
                      stroke="#1FE0B0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-gradient-to-br from-[#2151FF] to-[#1FE0B0] px-[22px] py-[11px] text-[14.5px] font-semibold text-white shadow-[0_6px_18px_rgba(20,60,180,0.28)] transition-all hover:-translate-y-px hover:shadow-[0_10px_24px_rgba(20,60,180,0.34)]"
            >
              Meet the coaches
            </a>
          </div>

          {/* Right - Coach panel */}
          <div className="rounded-2xl border border-[#ffffff1f] bg-[#ffffff0a] p-[26px]">
            {coaches.map((coach, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 py-3 ${
                  i < coaches.length - 1 ? "border-b border-[#ffffff14]" : ""
                }`}
              >
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gradient-to-br from-[#2151FF] to-[#1FE0B0] font-heading text-sm font-bold text-white">
                  {coach.initials}
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-white">
                    {coach.name}
                  </div>
                  <div className="font-mono text-[11.5px] text-[#9CA3BC]">
                    {coach.role}
                  </div>
                </div>
                <div className="ml-auto font-mono text-[11.5px] text-[#1FE0B0]">
                  {coach.rate}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
