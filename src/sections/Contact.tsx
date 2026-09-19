import { MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 py-16 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="images/logo.png"
                alt="M³ Lab logo"
                className="h-12 w-auto rounded-md bg-white px-2 py-1"
              />
              <div className="leading-tight">
                <p className="text-sm font-bold text-white">Zhang Research Group — M³ Laboratory</p>
                <p className="text-xs text-slate-400">Manufacturing · Microstructure · Mechanics</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-md">
              We welcome motivated students and collaborators interested in additive manufacturing,
              physical metallurgy, and multiscale mechanical characterization of advanced structural
              alloys.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Contact</h3>
            <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-cyan-400" />
              <span>
                Dr. Zhenbo Zhang (张振波)
                <br />
                Center for Adaptive System Engineering
                <br />
                ShanghaiTech University
                <br />
                393 Middle Huaxia Road, Pudong, Shanghai 201210, China
              </span>
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Zhang Research Group, ShanghaiTech University. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
