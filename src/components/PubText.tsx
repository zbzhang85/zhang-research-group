import { journals } from '@/data/content'

// Renders a raw publication string with:
//  - "Z.B. Zhang" bold + underlined
//  - journal names in italics
export default function PubText({ text }: { text: string }) {
  // Build a regex that matches journal names (longest first) and Z.B. Zhang variants
  const escaped = journals
    .slice()
    .sort((a, b) => b.length - a.length)
    .map((j) => j.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const re = new RegExp(`(Z\\.B\\. Zhang\\*?|${escaped.join('|')})`, 'g')

  const parts = text.split(re)
  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null
        if (/^Z\.B\. Zhang\*?$/.test(part)) {
          return (
            <span key={i} className="font-semibold underline decoration-slate-400 underline-offset-2">
              {part}
            </span>
          )
        }
        if (journals.includes(part)) {
          return (
            <em key={i} className="text-slate-700">
              {part}
            </em>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}
