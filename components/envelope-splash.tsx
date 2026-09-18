'use client'

import { useCallback, useState } from 'react'

const EMBERS = [
  { left: '18%', bottom: '8%', duration: '9s', delay: '0s' },
  { left: '32%', bottom: '4%', duration: '12s', delay: '2.2s' },
  { left: '55%', bottom: '6%', duration: '10s', delay: '4.5s' },
  { left: '71%', bottom: '10%', duration: '8s', delay: '1.4s' },
  { left: '84%', bottom: '5%', duration: '11s', delay: '3.6s' },
  { left: '45%', bottom: '12%', duration: '13s', delay: '5.8s' },
]

export function EnvelopeSplash({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false)

  const handleOpen = useCallback(() => {
    if (opening) return
    setOpening(true)
    window.setTimeout(onOpen, 1050)
  }, [opening, onOpen])

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden bg-background ${opening ? 'splash-opening' : ''}`}
      aria-label="دعوة زفاف"
    >
      {/* Cover-fit scene that keeps the seal hotspot anchored to the photo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative shrink-0"
          style={{
            aspectRatio: '1536 / 809',
            minWidth: '100%',
            minHeight: '100%',
          }}
        >
          <img
            src="/images/envelope-scene-clean.png"
            alt="مغلف دعوة الزفاف مربوط بخيط ومختوم بختم شمعي أحمر بجانب شمعة مضيئة"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />

          {/* Candle flicker layer */}
          <div
            className="candle-glow pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 34% 30% at 88% 16%, rgba(255,186,92,0.22) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          {/* Interactive wax seal hotspot — aligned with the seal in the photo */}
          <button
            type="button"
            onClick={handleOpen}
            disabled={opening}
            className="seal-hotspot absolute z-10 cursor-pointer rounded-full transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-soft active:scale-95"
            style={{
              left: '50.2%',
              top: '60%',
              width: 'min(11%, 150px)',
              aspectRatio: '1',
              transform: 'translate(-50%, -50%)',
            }}
            aria-label="افتح الدعوة"
          >
            <span className="sr-only">افتح الدعوة</span>
          </button>
        </div>
      </div>

    {/* Vignette to sink edges into darkness */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 75% 70% at 50% 46%, transparent 55%, rgba(10,6,2,0.55) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Rising embers */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {EMBERS.map((e, i) => (
          <span
            key={i}
            className="ember"
            style={{
              left: e.left,
              bottom: e.bottom,
              animationDuration: e.duration,
              animationDelay: e.delay,
            }}
          />
        ))}
      </div>

    </div>
  )
}
