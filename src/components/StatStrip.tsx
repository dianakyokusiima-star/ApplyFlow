export function StatStrip() {
  return (
    <div className="bg-[#0A1128] py-10">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 px-8 sm:grid-cols-3">
        {[
          {
            num: "~40",
            label:
              "fields repeated on nearly every job application — name, history, links, references.",
          },
          {
            num: "15 min",
            label:
              "typical time spent per manual application, before you even write the cover letter.",
          },
          {
            num: "1 flow",
            label:
              "to store, fill, write, and track — instead of a form, a doc, and a spreadsheet.",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className={`border-[#ffffff1f] px-8 max-sm:border-t max-sm:pt-5 sm:border-l ${
              i === 0 ? "max-sm:border-t-0 max-sm:pt-0 sm:border-l-0 sm:pl-0" : ""
            }`}
          >
            <div className="mb-1.5 bg-gradient-to-br from-[#2151FF] to-[#1FE0B0] bg-clip-text font-heading text-[34px] font-bold text-transparent">
              {stat.num}
            </div>
            <div className="max-w-[260px] text-[13.5px] text-[#B7BDD4]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
