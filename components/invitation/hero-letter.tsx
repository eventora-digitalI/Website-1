import { NubianDivider, WaxSealMark } from './ornaments'

export function HeroLetter() {
  return (
    <section id="hero" className="relative flex min-h-svh items-center justify-center px-4 py-16">
      <div className="letter-rise paper-card paper-grain deckle relative w-full max-w-3xl overflow-hidden px-6 py-12 md:px-14 md:py-16">


        <div className="relative flex flex-col items-center text-center">
          <p className="font-sans text-xs font-light tracking-[0.3em] text-ink/70">دعوة زفاف</p>

          <NubianDivider className="mt-4 w-44 text-wax" />

          <h1 className="mt-8 font-serif text-4xl leading-relaxed font-bold text-balance text-ink md:text-6xl">
            أحمد خالد
            <span className="mx-3 inline-block align-middle text-wax" aria-hidden="true">
              ♥
            </span>
            نور الشريف
          </h1>

          <p className="mt-5 font-sans text-sm font-light text-ink/75 md:text-base">
            روحان · رحلة واحدة مدى الحياة
          </p>

          <NubianDivider className="mt-8 w-44 text-gold" />

          <p className="mt-6 font-serif text-lg text-ink md:text-xl">٢٢ — ٢٣ أكتوبر ٢٠٢٦</p>
          <p className="mt-1 font-sans text-xs font-light text-ink/70 md:text-sm">
            ٢٢ أكتوبر — ليلة الحنة &nbsp;·&nbsp; ٢٣ أكتوبر — كتب الكتاب
          </p>

          <WaxSealMark className="mt-10 h-16 w-16 md:h-20 md:w-20" />
          <p className="mt-3 font-sans text-[0.65rem] font-light tracking-[0.25em] text-ink/55">
            القاهرة · مصر
          </p>
        </div>
      </div>
    </section>
  )
}
