import { courses, honors } from '@/data/content'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Award } from 'lucide-react'

export default function Teaching() {
  return (
    <section id="teaching" className="bg-slate-50 py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Teaching & Honors</h2>
        <div className="mt-2 h-1 w-16 bg-cyan-700 rounded" />

        <div className="mt-10 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
              <BookOpen className="h-4 w-4" /> Courses
            </h3>
            <div className="mt-4 space-y-3">
              {courses.map((c) => (
                <div
                  key={c.code}
                  className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-lg border border-slate-200 bg-white p-4"
                >
                  <Badge variant="outline" className="border-cyan-800/30 text-cyan-800 font-mono">
                    {c.code}
                  </Badge>
                  <span className="flex-1 min-w-[200px] text-sm font-medium text-slate-800">{c.name}</span>
                  <span className="text-xs text-slate-500">{c.level}</span>
                  <span className="text-xs text-slate-400">{c.credits} credits</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400">
              Course evaluation scores range 4.56–4.97 and teacher evaluation scores 4.67–5.00 (full mark
              5.0) across all semesters since 2020.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
              <Award className="h-4 w-4" /> Honors & Awards
            </h3>
            <ul className="mt-4 space-y-3">
              {honors.map((h, i) => (
                <li key={i} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4">
                  <span className="shrink-0 rounded bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-700 h-fit">
                    {h.year}
                  </span>
                  <span className="text-sm text-slate-700 leading-snug">{h.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
