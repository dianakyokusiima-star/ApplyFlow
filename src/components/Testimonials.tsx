export function Testimonials() {
  const testimonials = [
    {
      quote:
        '"I applied to more roles in one weekend than I had in the previous month. The cover letters actually reference the job posting, not generic filler."',
      name: "Amara Osei",
      tag: "Product Designer · hired in 6 weeks",
    },
    {
      quote:
        '"I stopped losing track of where I\'d applied. Seeing everything move from Applied to Interview kept me motivated on the hard weeks."',
      name: "Marcus Lindqvist",
      tag: "Data Analyst",
    },
    {
      quote:
        '"The autofill handled our clunky ATS without a hitch. My coach session the week before my final round made the difference."',
      name: "Priya Chandran",
      tag: "Ops Coordinator",
    },
  ];

  return (
    <section className="py-[100px] max-sm:py-16">
      <div className="mx-auto max-w-[1180px] px-8 max-sm:px-5">
        <div className="mb-14 max-w-[620px]">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#123EDB] before:inline-block before:h-px before:w-4 before:bg-[#0FB98F]">
            From people applying
          </span>
          <h2 className="mt-4 font-heading text-[36px] leading-[1.15] font-semibold tracking-[-0.02em] max-md:text-[28px]">
            Fewer forms. More offers.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#E3E6EF] bg-white p-[26px]"
            >
              <p className="mb-5 text-[15px] leading-[1.55] text-[#16213E]">
                {t.quote}
              </p>
              <div className="flex items-center gap-2.5">
                <div className="h-[34px] w-[34px] rounded-full border border-[#E3E6EF] bg-gradient-to-br from-[rgba(33,81,255,0.08)] to-[rgba(31,224,176,0.08)]" />
                <div>
                  <div className="text-[13.5px] font-semibold">{t.name}</div>
                  <div className="font-mono text-[11px] text-[#8A91A8]">
                    {t.tag}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
