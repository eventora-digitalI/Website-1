import { NubianDivider, WaxSealMark } from './ornaments'

const EVENTS = [
  {
    tag: 'ليلة الحنة',
    sealLabel: 'حـ',
    date: '٢٢',
    month: 'أكتوبر',
    title: 'ليلة الحنة',
    time: '٨ مساءً إلى ١٢ منتصف الليل · الخميس ٢٢ أكتوبر ٢٠٢٦',
    place: 'قاعة ألف ليلة وليلة، فندق النيل ريتز كارلتون — القاهرة',
    description: 'أمسية من الموسيقى الأصيلة والرقص وأجواء الحنة الجميلة',
  },
  {
    tag: 'كتب الكتاب',
    sealLabel: 'كـ',
    date: '٢٣',
    month: 'أكتوبر',
    title: 'كتب الكتاب',
    time: '٨ مساءً إلى ١٠ مساءً · الجمعة ٢٣ أكتوبر ٢٠٢٦',
    place: 'مسجد الشرطة — الشيخ زايد، الجيزة',
    description:
      'مراسم عقد الزواج المقدسة التي تجمع روحين أمام الله، محاطَيْن بدفء العائلة وأدعية الأحبة.',
  },
]

export function Events() {
  return (
    <section id="events" className="relative px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="reveal font-sans text-xs font-light tracking-[0.3em] text-gold">انضموا إلينا</p>
        <h2 className="reveal reveal-d1 mt-4 font-serif text-3xl font-bold text-balance text-foreground md:text-5xl">
          احتفالاتنا
        </h2>
        <NubianDivider className="reveal reveal-d2 mt-6 w-44 text-gold" />
      </div>

      <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-12">
        {EVENTS.map((event, i) => (
          <article
            key={event.title}
            className={`reveal ${i === 0 ? 'reveal-d2' : 'reveal-d3'} paper-card paper-grain deckle relative overflow-hidden p-7 md:p-10 ${i % 2 === 1 ? 'md:-rotate-1' : 'md:rotate-1'}`}
          >
            {/* twine across the card like the envelope wrap */}
            <div className="twine-line pointer-events-none absolute top-8 -right-4 -left-4 -rotate-2 opacity-70" aria-hidden="true" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex shrink-0 items-center gap-4 md:flex-col md:items-center">
                <WaxSealMark label={event.sealLabel} className="h-16 w-16 md:h-20 md:w-20" />
                <div className="text-right md:text-center">
                  <div className="font-serif text-4xl leading-none font-bold text-wax md:text-5xl">{event.date}</div>
                  <div className="font-sans text-xs font-light text-ink/65">{event.month}</div>
                </div>
              </div>

              <div className="min-w-0">
                <span className="inline-block rounded-full border border-wax/35 bg-wax/10 px-3 py-1 font-sans text-[0.68rem] text-wax-deep">
                  {event.tag}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-ink md:text-3xl">{event.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-ink/80">{event.time}</p>
                <p className="mt-1 font-sans text-sm leading-relaxed text-ink/80">{event.place}</p>
                <p className="mt-4 font-sans text-sm leading-relaxed font-light text-ink/70">{event.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
