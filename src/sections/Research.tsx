import { useState } from 'react'
import { directions } from '@/data/content'
import PubText from '@/components/PubText'
import { Layers, Atom, Microscope, Cog, ChevronDown, ExternalLink } from 'lucide-react'

const icons = [Atom, Layers, Microscope, Cog]

export default function Research() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section id="research" className="bg-slate-50 py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Research Directions</h2>
        <div className="mt-2 h-1 w-16 bg-cyan-700 rounded" />
        <p className="mt-6 max-w-3xl text-slate-600 leading-relaxed">
          Four interconnected thrusts — from alloy design and microstructure architecting by additive
          manufacturing, through multiscale characterization under near-service conditions, to
          engineering applications. Click a card to see representative publications.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6 items-start">
          {directions.map((d, i) => {
            const Icon = icons[i % icons.length]
            const expanded = open === d.id
            return (
              <div
                key={d.id}
                className={`group rounded-xl border bg-white p-6 shadow-sm transition-all cursor-pointer ${
                  expanded
                    ? 'border-cyan-700/50 shadow-md'
                    : 'border-slate-200 hover:shadow-md hover:border-cyan-700/40'
                }`}
                onClick={() => setOpen(expanded ? null : d.id)}
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-800/10 text-cyan-800 group-hover:bg-cyan-800 group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-4xl font-bold text-slate-100 group-hover:text-cyan-100 transition-colors select-none">
                    {d.id}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900 leading-snug">{d.title}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
                  {d.subtitle}
                </p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{d.description}</p>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-cyan-800">
                  <span>{expanded ? 'Hide' : 'Show'} representative publications ({d.papers.length})</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`}
                  />
                </div>

                {expanded && (
                  <div
                    className="mt-4 space-y-3 border-t border-slate-100 pt-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {d.papers.map((p, j) => (
                      <div key={j} className="rounded-lg bg-slate-50 p-3">
                        <p className="text-xs text-slate-600 leading-relaxed">
                          <PubText text={p.text} />
                        </p>
                        {p.images && p.images.length > 0 && (
                          <div
                            className={`mt-2 grid gap-2 ${
                              p.images.length > 1 ? 'sm:grid-cols-2' : ''
                            }`}
                          >
                            {p.images.map((img, k) => (
                              <figure
                                key={k}
                                className="overflow-hidden rounded-lg border border-slate-200 bg-white"
                              >
                                <img
                                  src={img.src}
                                  alt={img.caption ?? d.title}
                                  loading="lazy"
                                  className="w-full object-cover"
                                />
                                {img.caption && (
                                  <figcaption className="px-3 py-2 text-[11px] leading-snug text-slate-500">
                                    {img.caption}
                                  </figcaption>
                                )}
                              </figure>
                            ))}
                          </div>
                        )}
                        {p.news && p.news.length > 0 && (
                          <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                            {p.news.map((nl) => (
                              <a
                                key={nl.url}
                                href={nl.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-medium text-cyan-700 hover:text-cyan-900 hover:underline"
                              >
                                <ExternalLink className="h-3 w-3" />
                                {nl.label}
                              </a>
                            ))}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <figure className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <img
            src="images/hrdic-strain-650c.gif"
            alt="In-situ HRDIC: micro-strain evolution of a Ni-based superalloy at 650 °C"
            loading="lazy"
            className="w-full object-cover"
          />
          <figcaption className="px-5 py-3 text-xs leading-relaxed text-slate-500">
            In-situ high-resolution digital image correlation (HRDIC): micro-strain evolution of a
            Ni-based superalloy during loading at 650 °C.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
