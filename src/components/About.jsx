import useReveal from '../hooks/useReveal'

const values = [
  { icon: '⚡', title: 'Innovation First',   desc: 'We push boundaries with next-generation technologies that redefine what is possible in enterprise software.' },
  { icon: '🎯', title: 'Results Driven',     desc: 'Every line of code, every architecture decision is made with measurable business outcomes in mind.' },
  { icon: '🤝', title: 'Partnership Model',  desc: "We embed ourselves in your team — your challenges become ours, and your success is our success." },
  { icon: '🔒', title: 'Security & Scale',   desc: 'Enterprise-grade security baked in from day one, with architectures built to scale from startup to global.' },
]

export default function About() {
  const sectionRef = useReveal()

  return (
    <section id="about" className="relative py-24 overflow-hidden" ref={sectionRef}>


      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left */}
          <div className="reveal">
            <span className="section-label">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M6 3v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              About Futentia
            </span>
            <h2 className="section-title">
              Building the Future of<br/>
              <span className="gradient-text">Enterprise Intelligence</span>
            </h2>
            <p className="section-subtitle mb-6">
              Futentia Solutions is a technology company specializing in AI, data engineering, and digital
              transformation. Founded by engineers and data scientists who believe technology should be
              the greatest equalizer for ambitious businesses.
            </p>
            <p className="text-sm text-slate-600 leading-[1.8] mb-9">
              From AI-powered analytics platforms to custom enterprise software, we partner with companies
              across industries to deliver intelligent systems that create real, lasting competitive advantages.
              We don't just build software — we engineer transformation.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#services" className="btn-primary"><span>Our Services</span></a>
              <a href="#contact"  className="btn-outline">Meet the Team</a>
            </div>
          </div>

          {/* Right: values grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div key={v.title}
                   className="glass-card p-6 reveal"
                   style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="text-[1.6rem] mb-3 leading-none">{v.icon}</div>
                <h3 className="font-display font-bold text-base text-slate-100 mb-2 tracking-tight">{v.title}</h3>
                <p className="text-[0.83rem] text-slate-600 leading-[1.65]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
