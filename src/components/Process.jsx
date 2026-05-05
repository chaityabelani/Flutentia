import useReveal from '../hooks/useReveal'

const steps = [
  { num: '01', title: 'Discovery & Strategy',   tags: ['Workshops','Stakeholder Interviews','Audit'],
    desc: 'We deep-dive into your business challenges, goals, and existing tech landscape. Every engagement begins with understanding — not assumptions.' },
  { num: '02', title: 'Architecture & Design',  tags: ['System Design','Prototyping','Tech Selection'],
    desc: 'We architect solutions built for your specific scale, security posture, and future growth — creating detailed technical blueprints before writing a single line.' },
  { num: '03', title: 'Agile Development',      tags: ['Sprints','CI/CD','Code Review'],
    desc: 'Rapid two-week sprints with continuous delivery, transparent progress reporting, and weekly demos so you are always in control.' },
  { num: '04', title: 'Testing & QA',           tags: ['Unit Tests','Load Testing','Security Audit'],
    desc: 'Rigorous automated testing, performance benchmarking, and security audits ensure your product is production-ready before it ships.' },
  { num: '05', title: 'Deploy & Scale',         tags: ['Kubernetes','Monitoring','Auto-scaling'],
    desc: 'Seamless deployment to your infrastructure of choice with zero-downtime releases, monitoring, and alerting configured from day one.' },
  { num: '06', title: 'Support & Evolution',    tags: ['SLA','Roadmap','Optimization'],
    desc: 'Post-launch SLAs, proactive monitoring, and continuous improvement cycles ensure your system evolves with your business needs.' },
]

export default function Process() {
  const sectionRef = useReveal()

  return (
    <section id="process" className="relative py-24 overflow-hidden" ref={sectionRef}>


      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 reveal">
          <span className="section-label">How We Work</span>
          <h2 className="section-title">
            A Proven Process,<br/>
            <span className="gradient-text">Exceptional Results</span>
          </h2>
          <p className="section-subtitle">
            Six battle-tested stages that take you from challenge to competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative p-8 bg-gradient-card border border-accent-primary/20 rounded-xl2
                         overflow-hidden group transition-all duration-250
                         hover:-translate-y-1 hover:border-accent-primary/35
                         hover:shadow-[0_16px_40px_rgba(99,102,241,0.12)]
                         ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'} reveal-d${(i % 3) + 1}`}
            >
              {/* Top gradient bar on hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-hero
                              opacity-0 group-hover:opacity-100 transition-opacity duration-250"/>

              <div className="font-display font-extrabold text-[3rem] leading-none tracking-[-0.05em]
                              gradient-text opacity-30 group-hover:opacity-70 transition-opacity duration-250 mb-4">
                {step.num}
              </div>

              <h3 className="font-display font-bold text-[1.05rem] text-slate-100 mb-2.5 tracking-tight">
                {step.title}
              </h3>
              <p className="text-[0.85rem] text-slate-600 leading-[1.7] mb-4">{step.desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {step.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
