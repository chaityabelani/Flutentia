import useReveal from '../hooks/useReveal'

export default function CTABanner() {
  const ref = useReveal()

  return (
    <section className="py-12 lg:py-20 bg-bg-primary" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative rounded-xl3 p-8 sm:p-12 md:p-[72px_64px] overflow-hidden text-center flex flex-col items-center
                        border border-accent-primary/25 reveal"
             style={{ background: 'linear-gradient(145deg,rgba(99,102,241,.12),rgba(139,92,246,.06),rgba(6,182,212,.08))' }}>



          {/* Orbs */}
          <div className="absolute orb w-[400px] h-[400px] -top-24 -left-24 animate-orb-float"
               style={{ background: 'radial-gradient(circle,rgba(99,102,241,.2),transparent 70%)' }}/>
          <div className="absolute orb w-[300px] h-[300px] -bottom-20 -right-20 animate-orb-float-2"
               style={{ background: 'radial-gradient(circle,rgba(6,182,212,.15),transparent 70%)' }}/>

          <div className="relative z-10 flex flex-col items-center max-w-[620px]">
            <span className="section-label">Ready to Start?</span>
            <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-tight leading-tight text-slate-100 mb-4">
              Transform Your Business<br/>
              <span className="gradient-text">Starting Today</span>
            </h2>
            <p className="text-base text-slate-400 leading-[1.7] mb-9">
              Join 150+ companies that chose Futentia to build their competitive edge.
              Your first consultation is free — no commitment required.
            </p>
            <div className="flex flex-wrap justify-center gap-3.5">
              <a href="#contact" className="btn-primary px-8 py-3.5 text-[0.95rem]">
                <span>Schedule Free Consultation</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#services" className="btn-outline px-8 py-3.5 text-[0.95rem]">View Our Work</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
