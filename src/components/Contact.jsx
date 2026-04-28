import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const contactDetails = [
  {
    label: 'Email Us', value: 'hello@futentia.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 6l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Call Us', value: '+1 (555) 000-1234',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 4a1 1 0 011-1h2.5l1 3-1.5 1.5a11 11 0 005.5 5.5L13 11.5l3 1V15a1 1 0 01-1 1C7.4 16 2 10.6 2 5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: 'Headquarters', value: 'San Francisco, CA / Remote',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2a5 5 0 015 5c0 4-5 9-5 9S4 11 4 7a5 5 0 015-5z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="9" cy="7" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
]

const serviceOptions = [
  'Data Engineering','AI & Machine Learning','Digital Transformation',
  'Enterprise Software','App Development','Cloud Architecture',
]

export default function Contact() {
  const sectionRef = useReveal()
  const [form, setForm] = useState({ name:'', email:'', company:'', service:'', message:'' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name:'', email:'', company:'', service:'', message:'' })
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-24 bg-bg-secondary overflow-hidden" ref={sectionRef}>
      {/* Orbs */}
      <div className="orb w-[500px] h-[500px] -top-24 -left-24 animate-orb-float opacity-40"
           style={{ background: 'radial-gradient(circle,rgba(99,102,241,.25),transparent 70%)' }}/>
      <div className="orb w-[400px] h-[400px] top-1/3 -right-24 animate-orb-float-2 opacity-30"
           style={{ background: 'radial-gradient(circle,rgba(139,92,246,.2),transparent 70%)' }}/>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left info */}
          <div className="reveal">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">
              Let's Build Something<br/>
              <span className="gradient-text">Remarkable</span>
            </h2>
            <p className="section-subtitle mb-10">
              Tell us about your challenge. Our team will respond within one business day
              with a tailored approach and next steps.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {contactDetails.map((d) => (
                <div key={d.label} className="flex items-start gap-3.5">
                  <div className="w-[42px] h-[42px] flex items-center justify-center flex-shrink-0
                                  bg-accent-primary/10 border border-accent-primary/20 rounded-xl
                                  text-accent-primary">
                    {d.icon}
                  </div>
                  <div>
                    <div className="text-2xs text-slate-600 font-medium uppercase tracking-[0.06em] mb-0.5">
                      {d.label}
                    </div>
                    <div className="text-[0.9rem] text-slate-100 font-medium">{d.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Response badge */}
            <div className="inline-flex items-center gap-2 text-[0.8rem] text-slate-600
                            bg-accent-emerald/8 border border-accent-emerald/20 px-4 py-2 rounded-full">
              <span className="w-[7px] h-[7px] rounded-full bg-accent-emerald flex-shrink-0 animate-pulse-glow"/>
              We typically respond within 4 business hours
            </div>
          </div>

          {/* Right form */}
          <div className="reveal bg-gradient-card border border-accent-primary/20 rounded-xl3 p-10
                          backdrop-blur-xl">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[0.8rem] font-semibold text-slate-400 tracking-[0.02em]">
                    Full Name *
                  </label>
                  <input id="name" name="name" type="text" required
                         placeholder="Jane Smith" value={form.name} onChange={handleChange}
                         className="form-input"/>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[0.8rem] font-semibold text-slate-400 tracking-[0.02em]">
                    Work Email *
                  </label>
                  <input id="email" name="email" type="email" required
                         placeholder="jane@company.com" value={form.email} onChange={handleChange}
                         className="form-input"/>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-[0.8rem] font-semibold text-slate-400 tracking-[0.02em]">
                    Company
                  </label>
                  <input id="company" name="company" type="text"
                         placeholder="Company Inc." value={form.company} onChange={handleChange}
                         className="form-input"/>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-[0.8rem] font-semibold text-slate-400 tracking-[0.02em]">
                    Service Interest
                  </label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}
                          className="form-input cursor-pointer appearance-none"
                          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%2364748b' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', paddingRight: 36 }}>
                    <option value="">Select a service...</option>
                    {serviceOptions.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[0.8rem] font-semibold text-slate-400 tracking-[0.02em]">
                  Tell Us About Your Project *
                </label>
                <textarea id="message" name="message" required rows={5}
                          placeholder="Describe your challenge, goals, and timeline..."
                          value={form.message} onChange={handleChange}
                          className="form-input resize-y min-h-[120px]"/>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={`btn-primary justify-center py-3.5 text-[0.95rem] disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === 'sent' ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Message Sent!</span>
                  </>
                ) : status === 'sending' ? (
                  <><span className="animate-spin-slow inline-block">⟳</span><span>Sending...</span></>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
