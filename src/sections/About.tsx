import { profileParagraphs, pi } from '@/data/content'
import { GraduationCap, MapPin } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="bg-white py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">About Us</h2>
            <div className="mt-2 h-1 w-16 bg-cyan-700 rounded" />
            {profileParagraphs.map((p, i) => (
              <p key={i} className="mt-6 text-slate-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <img
                src="images/team/zhenbo-zhang.jpg"
                alt="Dr. Zhenbo Zhang"
                className="h-40 w-32 rounded-xl object-cover object-top ring-2 ring-slate-200 shadow-sm"
              />
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {pi.name} <span className="text-slate-500 font-normal">{pi.nameZh}</span>
              </h3>
              <p className="mt-1 text-sm font-medium text-cyan-800">{pi.title}</p>
              <p className="mt-1 flex items-start gap-1.5 text-sm text-slate-500">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                {pi.affiliation}
              </p>
              <div className="mt-5 border-t border-slate-200 pt-4">
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">
                  <GraduationCap className="h-4 w-4" /> Education & Career
                </p>
                <ul className="space-y-3">
                  {pi.education.map((e, i) => (
                    <li key={i} className="text-sm text-slate-600 leading-snug">
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
