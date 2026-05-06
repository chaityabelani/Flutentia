import useReveal from '../hooks/useReveal'

const industries = [
  { icon: '🏥', label: 'Healthcare',        desc: 'Predictive diagnostics, patient analytics & compliance systems' },
  { icon: '🎓', label: 'Education',         desc: 'Adaptive learning platforms & student outcome intelligence' },
  { icon: '💳', label: 'Finance',           desc: 'Fraud detection, risk modeling & real-time trading analytics' },
  { icon: '🛍️', label: 'Retail & E-Commerce',desc: 'Demand forecasting, personalization & supply chain AI' },
  { icon: '🏗️', label: 'Real Estate',       desc: 'Property valuation AI, market intelligence & automation' },
  { icon: '⚽', label: 'Sports & Media',    desc: 'Performance analytics, fan engagement & content AI' },
  { icon: '🚚', label: 'Logistics',         desc: 'Route optimization, fleet intelligence & warehouse automation' },
  { icon: '⚙️', label: 'Manufacturing',     desc: 'Predictive maintenance, quality control & process AI' },
]

export default function Industries() {
  const sectionRef = useReveal()

  return (
    <section id="industries" className="py-24 bg-bg-secondary/90" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-14 reveal">
          <span className="section-label">Industries</span>
          <h2 className="section-title">
            Technology That Fits<br/>
            <span className="gradient-text">Your Domain</span>
          </h2>
          <p className="section-subtitle">
            Deep domain expertise across 12+ industries ensures our solutions
            speak the language of your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <div
              key={ind.label}
              className="relative flex items-start gap-3.5 p-5 rounded-xl
                         bg-gradient-card border border-accent-primary/20
                         cursor-pointer overflow-hidden group
                         transition-all duration-250 hover:-translate-y-1
                         hover:border-accent-primary/35
                         hover:shadow-[0_12px_32px_rgba(99,102,241,0.12)]
                         reveal"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {/* Hover tint */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/6 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none"/>

              <span className="text-[1.5rem] leading-none flex-shrink-0 mt-0.5">{ind.icon}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-[0.9rem] text-slate-100 mb-1">{ind.label}</h3>
                <p className="text-[0.78rem] text-slate-600 leading-[1.5]">{ind.desc}</p>
              </div>

              {/* Arrow reveals on hover */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                   className="flex-shrink-0 mt-0.5 text-slate-600 opacity-0 -translate-x-1
                              group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-accent-primary
                              transition-all duration-250">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
