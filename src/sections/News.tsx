import { news } from '@/data/content'
import { Megaphone, ExternalLink } from 'lucide-react'

export default function News() {
  return (
    <section id="news" className="bg-white py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Group News</h2>
        <div className="mt-2 h-1 w-16 bg-cyan-700 rounded" />

        <div className="mt-10 space-y-4">
          {news.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-cyan-700/40 hover:shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-800/10 text-cyan-800">
                <Megaphone className="h-4.5 w-4.5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
                  {item.date}
                </p>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed">{item.text}</p>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.text}
                    loading="lazy"
                    className="mt-3 max-h-80 w-full rounded-lg border border-slate-100 object-cover"
                  />
                )}
                {item.links && item.links.length > 0 && (
                  <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                    {item.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-cyan-700 hover:text-cyan-900 hover:underline"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {l.label}
                      </a>
                    ))}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
