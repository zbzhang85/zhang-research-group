import { pi, staff, phdStudents, masterStudents, alumni } from '@/data/content'
import type { Member } from '@/data/content'
import { UserRound, ArrowRight } from 'lucide-react'

function Avatar({ photo, alt, className }: { photo?: string; alt: string; className: string }) {
  if (photo) {
    return (
      <img
        src={`images/team/${photo}.jpg`}
        alt={alt}
        loading="lazy"
        className={`${className} object-cover object-top bg-slate-100`}
      />
    )
  }
  return (
    <span className={`${className} flex items-center justify-center bg-slate-100 text-slate-400`}>
      <UserRound className="h-1/2 w-1/2" />
    </span>
  )
}

function MemberCard({ name, nameZh, role, photo, cohort, school, direction, note }: Member) {
  return (
    <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-cyan-700/40 hover:shadow-md">
      <Avatar
        photo={photo}
        alt={name}
        className="h-16 w-16 shrink-0 rounded-full ring-2 ring-slate-100"
      />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900">
          {name} <span className="font-normal text-slate-500">{nameZh}</span>
        </p>
        <p className="text-xs text-cyan-800 font-medium">
          {role}
          {cohort && <span className="text-slate-400 font-normal"> · since {cohort}</span>}
        </p>
        {school && <p className="mt-1 text-xs text-slate-500">{school}</p>}
        {direction && direction !== 'TBD' && (
          <p className="mt-1 text-xs text-slate-400 leading-snug">{direction}</p>
        )}
        {note && <p className="mt-1 text-xs text-slate-400">{note}</p>}
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section id="team" className="bg-white py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Our Team</h2>
        <div className="mt-2 h-1 w-16 bg-cyan-700 rounded" />

        {/* PI */}
        <div className="mt-10 rounded-xl border border-cyan-800/20 bg-gradient-to-br from-cyan-50 to-white p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <img
              src="images/team/zhenbo-zhang.jpg"
              alt="Dr. Zhenbo Zhang"
              className="h-24 w-24 shrink-0 rounded-full object-cover object-top ring-4 ring-white shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {pi.name} <span className="text-slate-500 font-normal">{pi.nameZh}</span>
              </h3>
              <p className="text-sm font-medium text-cyan-800">{pi.title}</p>
              <p className="mt-1 text-sm text-slate-500">{pi.affiliation}</p>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-2xl">
                Principal investigator of the M³ laboratory. His research integrates alloy design,
                additive manufacturing and multiscale mechanics to deliver structural alloys with high
                strength, damage tolerance and reliable service performance.
              </p>
            </div>
          </div>
        </div>

        {/* Staff */}
        <h3 className="mt-12 text-sm font-semibold uppercase tracking-wider text-slate-500">
          Research Staff
        </h3>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          {staff.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>

        {/* PhD */}
        <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-slate-500">
          PhD Candidates
        </h3>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {phdStudents.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>

        {/* Master */}
        <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-slate-500">
          Master Candidates
        </h3>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {masterStudents.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>

        {/* Alumni */}
        <h3 className="mt-12 text-sm font-semibold uppercase tracking-wider text-slate-500">Alumni</h3>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {alumni.map((a) => (
            <div
              key={a.name}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-cyan-700/40 hover:shadow-md"
            >
              <Avatar
                photo={a.photo}
                alt={a.name}
                className="h-16 w-16 shrink-0 rounded-full ring-2 ring-slate-100"
              />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900">
                  {a.name} <span className="font-normal text-slate-500">{a.nameZh}</span>
                </p>
                <p className="text-xs text-cyan-800 font-medium">
                  {a.degree} <span className="text-slate-400 font-normal">· {a.year}</span>
                </p>
                {a.destination && (
                  <p className="mt-1.5 flex items-start gap-1.5 text-xs text-slate-500 leading-snug">
                    <ArrowRight className="h-3.5 w-3.5 mt-px shrink-0 text-cyan-700" />
                    <span>{a.destination}</span>
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
