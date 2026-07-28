export function Tracking() {
  return (
    <section id="track" className="py-[100px] max-sm:py-16">
      <div className="mx-auto max-w-[1180px] px-8 max-sm:px-5">
        <div className="mb-14 max-w-[620px]">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#123EDB] before:inline-block before:h-px before:w-4 before:bg-[#0FB98F]">
            Application tracking
          </span>
          <h2 className="mt-4 font-heading text-[36px] leading-[1.15] font-semibold tracking-[-0.02em] max-md:text-[28px]">
            Every application, one flow.
          </h2>
          <p className="mt-3.5 text-base text-[#5B6478]">
            No more spreadsheet you forget to update. ApplyFlow logs where you applied and moves it forward as things happen.
          </p>
        </div>

        <div className="rounded-[20px] border border-[#E3E6EF] bg-white p-7 shadow-[0_1px_2px_rgba(10,17,40,0.04),0_8px_24px_rgba(10,17,40,0.06)]">
          <div className="mb-[22px] flex flex-wrap items-center justify-between gap-2.5">
            <h4 className="font-heading text-[15px] font-semibold tracking-[-0.02em]">
              Your pipeline
            </h4>
            <span className="font-mono text-[11.5px] text-[#8A91A8]">
              Updated automatically
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <PipelineCol
              title="Saved"
              count={3}
              apps={[
                { co: "Fenwick & Rowe", role: "Product Marketing Lead", date: "Jul 21" },
                { co: "Delta Analytics", role: "Data Analyst II", date: "Jul 19" },
              ]}
            />
            <PipelineCol
              title="Applied"
              count={6}
              apps={[
                { co: "Northwind Labs", role: "Sr. Product Designer", date: "Jul 22" },
                { co: "Basecamp Foods", role: "Ops Coordinator", date: "Jul 18" },
              ]}
            />
            <PipelineCol
              title="Interview"
              count={2}
              apps={[
                {
                  co: "Circuit & Co.",
                  role: "Frontend Engineer",
                  date: "Panel — Jul 29",
                  highlight: "interview",
                },
              ]}
            />
            <PipelineCol
              title="Offer"
              count={1}
              apps={[
                {
                  co: "Harlow Studio",
                  role: "UX Researcher",
                  date: "Reply by Jul 30",
                  highlight: "offer",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PipelineCol({
  title,
  count,
  apps,
}: {
  title: string;
  count: number;
  apps: { co: string; role: string; date: string; highlight?: string }[];
}) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.06em] text-[#8A91A8]">
        {title}
        <span className="rounded-full bg-[#F6F7FB] px-[7px] py-px text-[#16213E]">
          {count}
        </span>
      </div>
      {apps.map((app, i) => (
        <div
          key={i}
          className={`mb-2.5 rounded-[10px] border border-[#E3E6EF] bg-[#F6F7FB] px-3 py-[11px] text-[12.5px] ${
            app.highlight === "offer"
              ? "border-l-[3px] border-l-[#1FE0B0]"
              : app.highlight === "interview"
                ? "border-l-[3px] border-l-[#2151FF]"
                : ""
          }`}
        >
          <div className="mb-0.5 font-semibold text-[#0A1128]">{app.co}</div>
          <div className="mb-1.5 text-[11.5px] text-[#5B6478]">{app.role}</div>
          <div className="font-mono text-[10px] text-[#8A91A8]">{app.date}</div>
        </div>
      ))}
    </div>
  );
}
