import { talksIntro, internationalTalks, domesticTalks } from '@/data/content'

function TalkList({ items, startN }: { items: string[]; startN: number }) {
  return (
    <ol className="space-y-3">
      {items.map((t, i) => (
        <li key={i} className="flex gap-4">
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-500">
            {startN + i}
          </span>
          <p className="text-sm text-slate-600 leading-relaxed">{t}</p>
        </li>
      ))}
    </ol>
  )
}

export default function Talks() {
  return (
    <section id="talks" className="bg-white py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Conference Talks</h2>
        <div className="mt-2 h-1 w-16 bg-cyan-700 rounded" />
        <p className="mt-6 text-slate-600">{talksIntro}</p>

        <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-slate-500">
          International Conferences
        </h3>
        <div className="mt-4">
          <TalkList items={internationalTalks} startN={1} />
        </div>

        <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-slate-500">
          Domestic Conferences
        </h3>
        <div className="mt-4">
          <TalkList items={domesticTalks} startN={1} />
        </div>
      </div>
    </section>
  )
}
