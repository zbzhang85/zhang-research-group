import { useState } from 'react'
import { independentPubs, submittedPubs, priorPubs } from '@/data/content'
import PubText from '@/components/PubText'

const groups = [
  { key: 'independent', label: 'Since 2020 (Independent)', pubs: independentPubs },
  { key: 'submitted', label: 'Submitted', pubs: submittedPubs },
  { key: 'prior', label: 'Prior to ShanghaiTech', pubs: priorPubs },
]

export default function Publications() {
  const [active, setActive] = useState('independent')
  const group = groups.find((g) => g.key === active)!

  return (
    <section id="publications" className="bg-slate-50 py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Publications</h2>
        <div className="mt-2 h-1 w-16 bg-cyan-700 rounded" />
        <p className="mt-6 text-slate-600">
          56 publications (plus 4 submitted manuscripts) · Total citations 2,780+ · H-index 26
          (Google Scholar, 2026.09). * corresponding author.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {groups.map((g) => (
            <button
              key={g.key}
              onClick={() => setActive(g.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === g.key
                  ? 'bg-cyan-800 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-cyan-700/50 hover:text-cyan-800'
              }`}
            >
              {g.label}
              <span className={`ml-2 text-xs ${active === g.key ? 'text-cyan-200' : 'text-slate-400'}`}>
                {g.pubs.length}
              </span>
            </button>
          ))}
        </div>

        <ol className="mt-8 space-y-4">
          {group.pubs.map((p) => (
            <li key={p.n} className="flex gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-500">
                {p.n}
              </span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <PubText text={p.text} />
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
