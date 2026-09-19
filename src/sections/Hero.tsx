import { ArrowDown } from 'lucide-react'
import { stats } from '@/data/content'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 text-white">
      {/* background pattern: atomistic lattice dots + gradient */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(103,232,249,0.5) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/60 to-slate-900" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-36 pb-20">
        <img
          src="images/logo.png"
          alt="M³ Lab logo — Manufacturing, Microstructure, Mechanics"
          className="h-20 sm:h-24 w-auto rounded-lg bg-white px-4 py-2 shadow-lg mb-8"
        />
        <p className="text-cyan-400 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
          Manufacturing · Microstructure · Mechanics
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Zhang Research Group
          <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300">
            M³ Laboratory — 张振波课题组
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-base sm:text-lg text-slate-300 leading-relaxed">
          We design high-performance titanium alloys and nickel-based superalloys through additive
          manufacturing, architect their microstructures across length scales, and reveal how they
          deform and fail under real service conditions — from melt pool to engineering components.
        </p>
        <p className="mt-4 text-sm text-slate-400">
          Center for Adaptive System Engineering, ShanghaiTech University
        </p>

        <div className="mt-12 grid grid-cols-3 sm:grid-cols-6 gap-6 border-t border-white/10 pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl sm:text-3xl font-bold text-cyan-300">{s.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex justify-center pb-8">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-5 w-5 text-slate-400 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
