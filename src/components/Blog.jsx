import useReveal from '../hooks/useReveal'

const posts = [
  {
    category: 'AI & ML', color: '#6366f1', date: 'Apr 20, 2026', readTime: '8 min read',
    title: 'Building Production-Ready RAG Systems at Scale',
    excerpt: 'Retrieval-augmented generation is moving beyond demos — here is how to architect it for enterprise reliability and sub-100ms latency.',
  },
  {
    category: 'Data Engineering', color: '#06b6d4', date: 'Apr 14, 2026', readTime: '12 min read',
    title: 'The Modern Data Lakehouse: Iceberg, Delta and Beyond',
    excerpt: 'A deep dive into choosing the right table format for your analytical workloads — performance, cost, and operational trade-offs.',
  },
  {
    category: 'Cloud Architecture', color: '#10b981', date: 'Apr 7, 2026', readTime: '10 min read',
    title: 'Zero-Downtime Deployments for Stateful Microservices',
    excerpt: 'Rolling updates work great until you have shared databases and message queues. Here are patterns that actually work in production.',
  },
]

export default function Blog() {
  const sectionRef = useReveal()

  return (
    <section id="blog" className="relative py-16 lg:py-24 overflow-hidden" ref={sectionRef}>


      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header row */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12 reveal">
          <div>
            <span className="section-label">Insights</span>
            <h2 className="section-title">
              From the <span className="gradient-text">Engineering Desk</span>
            </h2>
          </div>
          <a href="#blog" className="btn-outline">
            View All Articles
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <article
              key={post.title}
              className="glass-card p-7 flex flex-col cursor-pointer group reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Meta */}
              <div className="flex items-center gap-2.5 flex-wrap mb-4">
                <span className="text-2xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-[0.04em] border"
                      style={{ color: post.color, background: `${post.color}15`, borderColor: `${post.color}30` }}>
                  {post.category}
                </span>
                <span className="text-[0.78rem] text-slate-600">{post.date}</span>
              </div>

              <h3 className="font-display font-bold text-[1.05rem] text-slate-100 leading-[1.4] mb-2.5 tracking-tight
                             transition-colors duration-150 group-hover:text-accent-primary">
                {post.title}
              </h3>
              <p className="text-[0.85rem] text-slate-600 leading-[1.7] flex-1 mb-5">{post.excerpt}</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-accent-primary/15">
                <span className="flex items-center gap-1.5 text-[0.78rem] text-slate-600">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  {post.readTime}
                </span>
                <a href="#blog"
                   className="inline-flex items-center gap-1 text-[0.8rem] font-semibold text-accent-primary
                              transition-all duration-150 hover:gap-2">
                  Read Article
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6h7M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
