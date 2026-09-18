import { groupPhotos } from '@/data/content'

export default function Gallery() {
  return (
    <section id="gallery" className="bg-slate-50 py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Group Photos</h2>
        <div className="mt-2 h-1 w-16 bg-cyan-700 rounded" />
        <p className="mt-6 text-slate-600">课题组合影 · The M³ Lab family at ShanghaiTech University.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {groupPhotos.map((p) => (
            <figure
              key={p.src}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
