import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const testimonials = [
  { name: 'Sarah Chen',    role: 'CTO, MediCore Health',      avatar: 'SC', color: '#6366f1',
    quote: 'Futentia built our patient analytics platform from scratch in just 4 months. The ML models they developed reduced diagnostic errors by 34%. They truly understand healthcare data.' },
  { name: 'Marcus Johnson',role: 'VP Engineering, TradeSphere',avatar: 'MJ', color: '#8b5cf6',
    quote: 'Our real-time fraud detection system processes 2M+ transactions daily with sub-50ms latency. The Futentia team delivered something that would have taken us years to build internally.' },
  { name: 'Priya Patel',   role: 'Director of Data, EduGrowth',avatar: 'PP', color: '#06b6d4',
    quote: "The adaptive learning engine they built for us has increased student engagement by 67%. The data pipeline architecture is elegant and scales effortlessly. Best technology partner we've worked with." },
  { name: 'Alex Rivera',   role: 'Founder, LogiFlow',          avatar: 'AR', color: '#10b981',
    quote: 'From a broken spreadsheet-based operation to a fully automated logistics platform in 6 months. Route optimization alone saves us $2M annually. The ROI is extraordinary.' },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const sectionRef = useReveal()
  const t = testimonials[active]

  return (
    <section id="testimonials" className="relative py-24 bg-bg-secondary overflow-hidden" ref={sectionRef}>
      {/* Soft radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
           style={{ background: 'radial-gradient(circle,rgba(99,102,241,.06),transparent 70%)' }}/>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-14 reveal">
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">
            Trusted by Teams Building<br/>
            <span className="gradient-text">What's Next</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-start reveal-fade">

          {/* Main quote */}
          <div className="relative bg-gradient-card border border-accent-primary/20 rounded-xl3 p-6 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[260px] sm:min-h-[300px]">
            {/* Quote mark */}
            <span className="absolute top-4 left-6 sm:top-6 sm:left-9 text-[4rem] sm:text-[5rem] leading-none font-serif gradient-text opacity-30 select-none">"</span>

            <blockquote className="text-[0.95rem] sm:text-[1.05rem] lg:text-[1.1rem] text-slate-100 leading-[1.8] italic mt-8 mb-7 sm:mb-9 flex-1">
              {t.quote}
            </blockquote>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                   style={{ background: `linear-gradient(135deg,${t.color},${t.color}88)` }}>
                {t.avatar}
              </div>
              <div>
                <div className="font-bold text-[0.9rem] sm:text-[0.95rem] text-slate-100">{t.name}</div>
                <div className="text-[0.75rem] sm:text-[0.8rem] text-slate-600">{t.role}</div>
              </div>
            </div>
          </div>

          {/* Tabs — horizontal scroll on mobile, vertical column on lg */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory scrollbar-none">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl text-left
                            border transition-all duration-250 flex-shrink-0 snap-start
                            min-w-[200px] lg:min-w-0
                            ${i === active
                              ? 'border-accent-primary/40 text-slate-100'
                              : 'border-accent-primary/15 text-slate-400 hover:bg-accent-primary/5 hover:border-accent-primary/20'}`}
                style={i === active ? { background: `color-mix(in srgb,${item.color} 10%,transparent)` } : {}}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[0.75rem] sm:text-[0.8rem] font-bold text-white flex-shrink-0"
                     style={{ background: `linear-gradient(135deg,${item.color},${item.color}88)` }}>
                  {item.avatar}
                </div>
                <div>
                  <div className="text-[0.82rem] sm:text-[0.875rem] font-semibold mb-0.5 whitespace-nowrap">{item.name}</div>
                  <div className="text-[0.7rem] sm:text-[0.75rem] text-slate-600 whitespace-nowrap">{item.role}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
