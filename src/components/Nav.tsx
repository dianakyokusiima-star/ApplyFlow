interface NavProps {
  businessName: string;
}

export function Nav({ businessName }: NavProps) {
  return (
    <header>
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <span className="font-heading text-[19px] font-bold tracking-[-0.02em]">
            {businessName.slice(0, -4)}
            <span className="bg-gradient-to-br from-[#2151FF] to-[#1FE0B0] bg-clip-text text-transparent">
              Flow
            </span>
          </span>
        </a>
        <div className="flex gap-9 max-md:hidden">
          <a href="#how" className="text-[14.5px] font-medium text-[#5B6478] transition-colors hover:text-[#0A1128]">
            How it works
          </a>
          <a href="#track" className="text-[14.5px] font-medium text-[#5B6478] transition-colors hover:text-[#0A1128]">
            Tracking
          </a>
          <a href="#coaching" className="text-[14.5px] font-medium text-[#5B6478] transition-colors hover:text-[#0A1128]">
            Coaching
          </a>
          <a href="#pricing" className="text-[14.5px] font-medium text-[#5B6478] transition-colors hover:text-[#0A1128]">
            Pricing
          </a>
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="text-[14.5px] font-medium text-[#16213E]">
            Log in
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-gradient-to-br from-[#2151FF] to-[#1FE0B0] px-4 py-2 text-[13.5px] font-semibold text-white shadow-[0_6px_18px_rgba(20,60,180,0.28)] transition-all hover:-translate-y-px hover:shadow-[0_10px_24px_rgba(20,60,180,0.34)]"
          >
            Get started free
          </a>
        </div>
      </nav>
    </header>
  );
}
