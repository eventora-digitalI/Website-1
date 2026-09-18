import { FeluccaSketch, NubianDivider } from './ornaments'

const LOCATIONS = [
  {
    tag: 'ليلة الحنة · ٢٢ أكتوبر',
    name: 'قاعة ألف ليلة وليلة (The Nile Ritz-Carlton)',
    address: 'فندق النيل ريتز كارلتون — ميدان التحرير، كورنيش النيل، القاهرة، مصر',
    href: 'https://maps.google.com/?q=The+Nile+Ritz-Carlton+Cairo',
  },
  {
    tag: 'كتب الكتاب · ٢٣ أكتوبر',
    name: 'مسجد الشرطة',
    address: 'مسجد الشرطة — المحور المركزي، الشيخ زايد، الجيزة، مصر',
    href: 'https://maps.google.com/?q=Police+Mosque+Sheikh+Zayed',
  },
]

export function Locations() {
  return (
    <section id="locations" className="relative px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="reveal font-sans text-xs font-light tracking-[0.3em] text-gold">اعرف الطريق</p>
        <h2 className="reveal reveal-d1 mt-4 font-serif text-3xl font-bold text-balance text-foreground md:text-5xl">
          أماكن المناسبات
        </h2>
        <NubianDivider className="reveal reveal-d2 mt-6 w-44 text-gold" />
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
        {LOCATIONS.map((loc, i) => (
          <article
            key={loc.name}
            className={`reveal ${i === 0 ? 'reveal-d2' : 'reveal-d3'} paper-card paper-grain deckle relative flex flex-col overflow-hidden p-7 md:p-9`}
          >
            <FeluccaSketch className="pointer-events-none absolute -top-2 -left-4 w-36 text-ink opacity-25" />

            <span className="relative inline-block self-start rounded-full border border-wax/35 bg-wax/10 px-3 py-1 font-sans text-[0.68rem] text-wax-deep">
              {loc.tag}
            </span>
            <h3 className="relative mt-4 font-serif text-2xl font-bold text-ink md:text-3xl">{loc.name}</h3>
            <p className="relative mt-2 font-sans text-sm leading-relaxed font-light text-ink/75">{loc.address}</p>

            <a
              href={loc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-6 inline-flex items-center gap-2 self-start rounded-full border border-ink/30 bg-ink/5 px-5 py-2.5 font-sans text-sm text-ink transition-colors hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
              </svg>
              افتح في خرائط جوجل
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
