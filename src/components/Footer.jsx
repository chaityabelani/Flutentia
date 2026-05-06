const footerLinks = {
  Services:   ['Data Engineering','AI & Machine Learning','Digital Transformation','Enterprise Software','App Development','Cloud Architecture'],
  Industries: ['Healthcare','Finance','Education','Retail','Real Estate','Sports & Media'],
  Company:    ['About Us','Our Process','Case Studies','Blog & Insights','Careers','Contact'],
  Legal:      ['Privacy Policy','Terms of Service','Cookie Policy','Security'],
}

const socials = [
  {
    label: 'LinkedIn',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M1.5 5.5h3v9h-3v-9zm1.5-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM5.5 5.5h2.8v1.2h.1C9 6 10 5.3 11.5 5.3c2.5 0 3 1.7 3 3.8v5.4h-3v-4.8c0-1.1 0-2.6-1.6-2.6S8 8.3 8 9.2v5.3H5.5v-9z"/></svg>,
  },
  {
    label: 'Twitter / X',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>,
  },
  {
    label: 'GitHub',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>,
  },
]

export default function Footer() {
  return (
    <footer className="bg-bg-secondary/90 border-t border-accent-primary/15">

      {/* Top */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-10 lg:gap-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="f_bg_footer" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#3b82f6"/>
                      <stop offset="100%" stopColor="#1d4ed8"/>
                    </linearGradient>
                  </defs>
                  <rect width="100" height="100" rx="22" fill="url(#f_bg_footer)" />
                  <path d="M 24 24 H 76 V 42 H 24 Z" fill="white" />
                  <path d="M 24 48 H 60 A 9 9 0 0 1 60 66 H 44 V 76 H 24 Z" fill="white" />
                </svg>
              </div>
              <span className="font-display text-xl font-bold tracking-tight gradient-text">Futentia</span>
            </a>
            <p className="text-[0.85rem] text-slate-600 leading-[1.7] mb-6 max-w-[280px]">
              Engineering intelligent systems that power tomorrow's most ambitious businesses.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a key={s.label} href="#home" aria-label={s.label}
                   className="w-9 h-9 flex items-center justify-center rounded-lg
                              bg-white/5 border border-white/8 text-slate-600
                              transition-all duration-150 hover:bg-accent-primary/10
                              hover:border-accent-primary/30 hover:text-accent-primary hover:-translate-y-0.5">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <h4 className="font-display font-bold text-[0.8rem] text-slate-100 uppercase
                             tracking-[0.1em] mb-4">
                {col}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#home"
                       className="text-[0.83rem] text-slate-600 transition-colors duration-150 hover:text-slate-100">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-accent-primary/15">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[0.8rem] text-slate-600">
            © {new Date().getFullYear()} Futentia Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {['Privacy','Terms','Cookies'].map((l, i, arr) => (
              <span key={l} className="flex items-center gap-2">
                <a href="#home" className="text-[0.78rem] text-slate-600 hover:text-slate-100 transition-colors duration-150">{l}</a>
                {i < arr.length - 1 && <span className="text-slate-700 text-[0.78rem]">·</span>}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-[0.78rem] text-slate-600">
            <span className="w-[7px] h-[7px] rounded-full bg-accent-emerald flex-shrink-0 animate-pulse-glow"/>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
