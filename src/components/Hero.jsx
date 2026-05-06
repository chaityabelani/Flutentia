import { useEffect, useRef } from 'react'
import NeuralNetwork from './NeuralNetwork'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      heroRef.current.style.setProperty('--mouse-x', `${((e.clientX - rect.left) / rect.width) * 100}%`)
      heroRef.current.style.setProperty('--mouse-y', `${((e.clientY - rect.top)  / rect.height) * 100}%`)
    }
    const el = heroRef.current
    el?.addEventListener('mousemove', handleMouseMove)
    return () => el?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const stats = [
    { value: '150+', label: 'Projects Delivered' },
    { value: '98%',  label: 'Client Satisfaction' },
    { value: '40+',  label: 'Expert Engineers' },
    { value: '12+',  label: 'Industries Served' },
  ]

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-[72px] spotlight"
      style={{ '--mouse-x': '50%', '--mouse-y': '50%' }}
    >
      {/* Ambient orbs */}
      <div className="orb w-[500px] h-[500px] -top-24 -left-24 animate-orb-float"
           style={{ background: 'radial-gradient(circle,rgba(99,102,241,.25),transparent 70%)' }}/>
      <div className="orb w-[400px] h-[400px] top-1/3 -right-24 animate-orb-float-2"
           style={{ background: 'radial-gradient(circle,rgba(139,92,246,.2),transparent 70%)' }}/>
      <div className="orb w-[350px] h-[350px] bottom-[10%] left-[30%] animate-orb-float-3"
           style={{ background: 'radial-gradient(circle,rgba(6,182,212,.15),transparent 70%)' }}/>

      {/* ── Content wrapper ── */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="flex items-center justify-between gap-16">

          {/* ── Left: text ── */}
          <div className="flex flex-col items-center xl:items-start flex-1 min-w-0 text-center xl:text-left">

            {/* Badge */}
            <div className="animate-fade-up-d1 inline-flex items-center gap-2 text-2xs font-semibold
                            tracking-[0.04em] text-accent-primary bg-accent-primary/10
                            border border-accent-primary/30 px-4 py-1.5 rounded-full mb-6 sm:mb-8">
              <span className="w-[7px] h-[7px] rounded-full bg-accent-primary animate-pulse-glow flex-shrink-0"/>
              AI-Powered Enterprise Solutions
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up-d2 font-display font-extrabold leading-[1.05]
                           tracking-[-0.03em] text-[clamp(2.2rem,7vw,5rem)] text-slate-100 mb-5 sm:mb-6">
              Driven By<br/>
              <span className="gradient-text">Intelligence</span>
            </h1>

            {/* Subtext */}
            <p className="animate-fade-up-d3 text-sm sm:text-base lg:text-lg text-slate-400 leading-[1.8] mb-8 sm:mb-10 max-w-[520px] mx-auto xl:mx-0">
              We transform businesses through cutting-edge AI, cloud architecture, and intelligent
              automation — building systems that scale and solutions that last.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up-d4 flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 sm:gap-4 mb-10 sm:mb-12 w-full xs:w-auto">
              <a href="#services" className="btn-primary text-[0.9rem] sm:text-[0.95rem] px-6 sm:px-8 py-3 sm:py-3.5 justify-center">
                <span>Explore Services</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8.5 3.5L13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#contact" className="btn-outline text-[0.9rem] sm:text-[0.95rem] px-6 sm:px-8 py-3 sm:py-3.5 justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 5l6 5 6-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Talk to Us
              </a>
            </div>

            {/* Stats */}
            <div className="animate-fade-up-d5 grid grid-cols-2 sm:grid-cols-4 items-start gap-6 sm:gap-10 pt-8 sm:pt-10
                            border-t border-accent-primary/15 w-full max-w-[520px] mx-auto xl:mx-0">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="gradient-text font-display text-2xl sm:text-3xl font-extrabold tracking-tight leading-none">
                    {s.value}
                  </span>
                  <span className="text-2xs text-slate-600 font-medium uppercase tracking-[0.05em] mt-1 whitespace-nowrap">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Interactive neural network (desktop only) ── */}
          <div className="hidden xl:flex items-center justify-center flex-shrink-0 animate-fade-in"
               style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <NeuralNetwork />
          </div>

        </div>
      </div>
    </section>
  )
}
