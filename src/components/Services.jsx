import useReveal from '../hooks/useReveal'

const services = [
  {
    color: '#6366f1',
    title: 'Data Engineering',
    desc: 'End-to-end data pipelines, warehousing, and lakehouse architectures that turn raw data into competitive intelligence.',
    tags: ['ETL/ELT','Data Lakes','Spark','dbt','Airflow'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M4 20L14 4L24 20H4Z" stroke="url(#s1)" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="14" cy="14" r="4" fill="url(#s1)" opacity="0.3"/>
        <defs><linearGradient id="s1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#06b6d4"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    color: '#8b5cf6',
    title: 'AI & Machine Learning',
    desc: 'Custom ML models, NLP systems, computer vision, and generative AI solutions tailored to your domain and data.',
    tags: ['LLMs','Computer Vision','NLP','MLOps','RAG'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="10" width="8" height="14" rx="2" fill="url(#s2)" opacity="0.3"/>
        <rect x="16" y="4" width="8" height="20" rx="2" fill="url(#s2)"/>
        <defs><linearGradient id="s2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8b5cf6"/><stop offset="100%" stopColor="#6366f1"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    color: '#06b6d4',
    title: 'Digital Transformation',
    desc: 'Strategic technology modernization — moving legacy systems to cloud-native architectures with zero disruption.',
    tags: ['Cloud Migration','Microservices','API Design','DevOps'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="url(#s3)" strokeWidth="1.5"/>
        <path d="M14 4C14 4 20 9 20 14C20 19 14 24 14 24" stroke="url(#s3)" strokeWidth="1.5"/>
        <path d="M4 14H24" stroke="url(#s3)" strokeWidth="1.5"/>
        <defs><linearGradient id="s3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#06b6d4"/><stop offset="100%" stopColor="#6366f1"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    color: '#10b981',
    title: 'Enterprise Software',
    desc: 'Bespoke software platforms, internal tools, and SaaS products built for reliability, speed, and scale.',
    tags: ['SaaS','Microservices','React','Node.js','Python'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="9" height="9" rx="2" fill="url(#s4)" opacity="0.3"/>
        <rect x="15" y="4" width="9" height="9" rx="2" fill="url(#s4)"/>
        <rect x="4" y="15" width="9" height="9" rx="2" fill="url(#s4)"/>
        <rect x="15" y="15" width="9" height="9" rx="2" fill="url(#s4)" opacity="0.3"/>
        <defs><linearGradient id="s4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#10b981"/><stop offset="100%" stopColor="#06b6d4"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    color: '#f43f5e',
    title: 'App Development',
    desc: 'Cross-platform mobile and web applications with stunning UX, real-time features, and enterprise integrations.',
    tags: ['React Native','Flutter','PWA','iOS','Android'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="3" width="18" height="22" rx="3" stroke="url(#s5)" strokeWidth="1.5"/>
        <circle cx="14" cy="12" r="4" fill="url(#s5)" opacity="0.4"/>
        <path d="M8 22c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="url(#s5)" strokeWidth="1.5"/>
        <defs><linearGradient id="s5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#f43f5e"/><stop offset="100%" stopColor="#8b5cf6"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    color: '#f59e0b',
    title: 'Cloud Architecture',
    desc: 'Design and deploy scalable, resilient cloud infrastructure on AWS, GCP, and Azure with cost-optimized patterns.',
    tags: ['AWS','GCP','Azure','Kubernetes','Terraform'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L25 9V19L14 25L3 19V9L14 3Z" stroke="url(#s6)" strokeWidth="1.5"/>
        <path d="M14 3V25M3 9L25 19M25 9L3 19" stroke="url(#s6)" strokeWidth="1" opacity="0.4"/>
        <defs><linearGradient id="s6" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#f59e0b"/><stop offset="100%" stopColor="#f43f5e"/></linearGradient></defs>
      </svg>
    ),
  },
]

export default function Services() {
  const sectionRef = useReveal()

  return (
    <section id="services" className="relative py-24 overflow-hidden" ref={sectionRef}>


      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 reveal">
          <span className="section-label">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1l1.5 3H11L8.5 6l1 3L6 7.5 2.5 9l1-3L1 4h3.5z" fill="currentColor"/>
            </svg>
            Our Services
          </span>
          <h2 className="section-title">
            Full-Stack Technology<br/>
            <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="section-subtitle">
            From raw data to intelligent products — we cover the full spectrum of
            modern technology services to power your transformation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`glass-card p-8 flex flex-col cursor-pointer reveal-scale group reveal-d${(i % 3) + 1}`}
            >
              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-xl2 opacity-0
                              group-hover:opacity-100 transition-opacity duration-250"
                   style={{ background: `linear-gradient(90deg, ${svc.color}, transparent)` }} />

              <div className="w-13 h-13 flex items-center justify-center rounded-xl
                              bg-accent-primary/8 border border-accent-primary/15 mb-5
                              transition-all duration-250 group-hover:bg-[color-mix(in_srgb,var(--accent-color)_15%,transparent)]
                              group-hover:border-[color-mix(in_srgb,var(--accent-color)_40%,transparent)]"
                   style={{ width: 52, height: 52 }}>
                {svc.icon}
              </div>

              <h3 className="font-display font-bold text-[1.1rem] text-slate-100 mb-2.5 tracking-tight">
                {svc.title}
              </h3>
              <p className="text-[0.875rem] text-slate-600 leading-[1.7] mb-4 flex-1">{svc.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {svc.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>

              <a href="#contact"
                 className="inline-flex items-center gap-1.5 text-[0.83rem] font-semibold
                            text-accent-primary transition-all duration-150 group/link">
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                     className="transition-transform duration-150 group-hover/link:translate-x-1">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
