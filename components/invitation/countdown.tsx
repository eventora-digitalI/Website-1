'use client'

import { useEffect, useState } from 'react'
import { NubianDivider } from './ornaments'

const TARGET = new Date('2026-10-22T18:00:00')

function getRemaining() {
  const diff = Math.max(0, TARGET.getTime() - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  }
}

const AR_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']

function toArabicNumber(n: number) {
  return String(n)
    .split('')
    .map((d) => AR_DIGITS[Number(d)] ?? d)
    .join('')
}

export function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getRemaining> | null>(null)

  useEffect(() => {
    setTime(getRemaining())
    const id = window.setInterval(() => setTime(getRemaining()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const items = [
    { label: 'يوم', value: time?.days },
    { label: 'ساعة', value: time?.hours },
    { label: 'دقيقة', value: time?.minutes },
    { label: 'ثانية', value: time?.seconds },
  ]

  return (
    <section id="countdown" className="relative px-4 py-20 text-center">
      <p className="reveal font-sans text-xs font-light tracking-[0.3em] text-gold">
        نعد اللحظات
      </p>
      <h2 className="reveal reveal-d1 mt-4 font-serif text-3xl font-bold text-balance text-foreground md:text-5xl">
        حتى ليلة الحنة — ٢٢ أكتوبر ٢٠٢٦
      </h2>
      <NubianDivider className="reveal reveal-d2 mt-6 w-44 text-gold" />

      <div className="reveal reveal-d2 mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-4 md:gap-6">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-3">
            <div className="wax-chip flex h-20 w-20 items-center justify-center rounded-full md:h-24 md:w-24">
              <span className="font-sans text-2xl font-bold text-[#f4d9c2] md:text-3xl" aria-live={item.label === 'ثانية' ? undefined : 'polite'}>
                {item.value === undefined ? '—' : toArabicNumber(item.value)}
              </span>
            </div>
            <span className="font-sans text-xs font-light text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
