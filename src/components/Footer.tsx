interface FooterProps {
  businessName: string;
}

export function Footer({ businessName }: FooterProps) {
  const baseName = businessName.slice(0, -4);
  return (
    <footer className="bg-[#0A1128] pb-7 pt-16 text-[#B7BDD4]">
      <div className="mx-auto max-w-[1180px] px-8 max-sm:px-5">
        <div className="grid grid-cols-1 gap-10 border-b border-[#ffffff1a] pb-11 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <span className="font-heading text-[19px] font-bold tracking-[-0.02em] text-white">
                {baseName}
                <span className="bg-gradient-to-br from-[#2151FF] to-[#1FE0B0] bg-clip-text text-transparent">
                  Flow
                </span>
              </span>
            </a>
            <p className="mt-3 max-w-[220px] text-[13.5px] text-[#8890A6]">
              Apply. Track. Succeed. The job application autofill assistant that remembers everything so you don't have to.
            </p>
          </div>

          {/* Product */}
          <div>
            <h5 className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[#7C84A0]">
              Product
            </h5>
            <a href="#how" className="mb-[11px] block text-[13.5px] text-[#C2C7DA] transition-colors hover:text-white">
              How it works
            </a>
            <a href="#track" className="mb-[11px] block text-[13.5px] text-[#C2C7DA] transition-colors hover:text-white">
              Tracking
            </a>
            <a href="#pricing" className="mb-[11px] block text-[13.5px] text-[#C2C7DA] transition-colors hover:text-white">
              Pricing
            </a>
          </div>

          {/* Company */}
          <div>
            <h5 className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[#7C84A0]">
              Company
            </h5>
            <a href="#coaching" className="mb-[11px] block text-[13.5px] text-[#C2C7DA] transition-colors hover:text-white">
              Coaching partners
            </a>
            <a href="#" className="mb-[11px] block text-[13.5px] text-[#C2C7DA] transition-colors hover:text-white">
              About
            </a>
            <a href="#" className="mb-[11px] block text-[13.5px] text-[#C2C7DA] transition-colors hover:text-white">
              Contact
            </a>
          </div>

          {/* Legal */}
          <div>
            <h5 className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[#7C84A0]">
              Legal
            </h5>
            <a href="#" className="mb-[11px] block text-[13.5px] text-[#C2C7DA] transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#" className="mb-[11px] block text-[13.5px] text-[#C2C7DA] transition-colors hover:text-white">
              Terms
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-6 text-[12.5px] text-[#6B7290]">
          <span>© 2026 {businessName}. All rights reserved.</span>
          <span className="font-mono">Apply. Track. Succeed.</span>
        </div>
      </div>
    </footer>
  );
}
