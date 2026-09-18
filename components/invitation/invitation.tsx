'use client'

import { useEffect, useRef } from 'react'
import { Countdown } from './countdown'
import { Events } from './events'
import { HeroLetter } from './hero-letter'
import { Locations } from './locations'
import { NubianDivider, WaxSealMark } from './ornaments'

function Message() {
  return (
    <section id="message" className="relative px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="reveal font-sans text-xs font-light tracking-[0.3em] text-gold">بكل محبة وامتنان</p>
        <h2 className="reveal reveal-d1 mt-4 font-serif text-3xl font-bold text-balance text-foreground md:text-5xl">
          ندعوكم من قلوبنا
        </h2>
        <NubianDivider className="reveal reveal-d2 mt-6 w-44 text-gold" />

        <div className="reveal reveal-d3 paper-card paper-grain deckle relative mx-auto mt-12 max-w-2xl p-8 md:p-12">
          <blockquote className="relative font-serif text-lg leading-loose text-pretty text-ink italic md:text-xl">
            {'"بقلوب مليئة بالحب والامتنان، ندعوكم بكل ود وسرور للمشاركة في أفراحنا. حضوركم هو أجمل هدية تُسعدنا، وسيجعل هذه اللحظات ذكرى لا تُنسى في قلوبنا."'}
          </blockquote>
          <div className="mx-auto my-6 h-px w-12 bg-ink/25" aria-hidden="true" />
          <p className="relative font-sans text-sm leading-loose font-light text-ink/75">
            كل قصة جميلة تبدأ بلحظة واحدة. قصتنا تزداد جمالاً بوجودكم معنا. شاركونا الاحتفال بالحب
            والعائلة وبداية رحلة جديدة مليئة بالسعادة والبركة. يشرّفنا أن نقضي هذه اللحظات
            الاستثنائية بجانبكم.
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative px-4 pt-16 pb-12 text-center">
      <WaxSealMark className="mx-auto h-14 w-14" />
      <p className="mt-6 font-serif text-2xl font-bold text-foreground md:text-3xl">{'أحمد & نور'}</p>
      <p className="mt-2 font-sans text-sm font-light text-muted-foreground">أكتوبر ٢٠٢٦ · القاهرة، مصر</p>
      <NubianDivider className="mt-8 w-44 text-gold" />
      <p className="mt-6 font-sans text-xs font-light text-muted-foreground">
        صُنع بالحب · إلى أعز الناس · ٢٠٢٦
      </p>
    </footer>
  )
}

export function Invitation() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const targets = root.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15 },
    )
    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <main ref={rootRef} className="night-texture relative min-h-svh overflow-hidden">
      {/* faint candle glow, echoing the envelope scene */}
      <div
        className="candle-glow pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 40% 32% at 86% 8%, rgba(255,178,88,0.09) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <HeroLetter />
        <Message />
        <Countdown />
        <Events />
        <Locations />
        <Footer />
      </div>
    </main>
  )
}
