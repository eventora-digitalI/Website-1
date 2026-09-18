export function NubianDivider({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 18" className={`mx-auto block ${className}`} aria-hidden="true" fill="none">
      <line x1="0" y1="9" x2="72" y2="9" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="148" y1="9" x2="220" y2="9" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M88 9 L96 2 L104 9 L96 16 Z" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <path d="M104 9 L110 4 L116 9 L110 14 Z" fill="currentColor" opacity="0.55" />
      <path d="M116 9 L124 2 L132 9 L124 16 Z" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <circle cx="80" cy="9" r="1.6" fill="currentColor" opacity="0.6" />
      <circle cx="140" cy="9" r="1.6" fill="currentColor" opacity="0.6" />
    </svg>
  )
}

export function NubianBorderStrip({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 12" preserveAspectRatio="none" className={`block w-full ${className}`} aria-hidden="true">
      {Array.from({ length: 15 }, (_, i) => (
        <path
          key={i}
          d={`M${i * 20} 12 L${i * 20 + 10} 2 L${i * 20 + 20} 12 Z`}
          fill="currentColor"
          opacity={i % 2 === 0 ? 0.5 : 0.25}
        />
      ))}
    </svg>
  )
}

export function FeluccaSketch({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 90" className={className} aria-hidden="true" fill="none" stroke="currentColor">
      {/* sail */}
      <path d="M62 12 Q94 22 96 62 L64 62 Q58 36 62 12 Z" strokeWidth="1.4" />
      <path d="M64 62 L62 12" strokeWidth="1" opacity="0.7" />
      {/* hull */}
      <path d="M42 66 Q80 76 118 66 L108 76 Q80 82 52 76 Z" strokeWidth="1.4" />
      <path d="M96 62 L96 66" strokeWidth="1.2" />
      {/* water */}
      <path d="M18 82 Q26 78 34 82 T50 82" strokeWidth="1" opacity="0.6" />
      <path d="M112 84 Q120 80 128 84 T144 84" strokeWidth="1" opacity="0.6" />
      {/* palm */}
      <path d="M140 62 Q142 40 138 26 M138 26 Q130 20 122 20 M138 26 Q136 16 128 12 M138 26 Q144 16 152 14 M138 26 Q148 22 156 26" strokeWidth="1.2" opacity="0.85" />
    </svg>
  )
}

export function WaxSealMark({
  className = '',
  label,
}: {
  className?: string
  label?: string
}) {
  return (
    <div className={`wax-chip relative flex items-center justify-center rounded-full ${className}`} aria-hidden="true">
      <svg viewBox="0 0 40 40" className="h-3/5 w-3/5 text-[#f2c8ad]/85" fill="none" stroke="currentColor">
        {label ? (
          <text
            x="20"
            y="26"
            textAnchor="middle"
            fontSize="15"
            fill="currentColor"
            stroke="none"
            style={{ fontFamily: 'var(--font-amiri), serif' }}
          >
            {label}
          </text>
        ) : (
          <path
            d="M20 34 Q19 22 20 8 M20 12 Q14 10 10 12 M20 10 Q15 6 11 6 M20 9 Q25 5 29 6 M20 12 Q26 9 30 12 M20 18 Q14 16 11 18 M20 18 Q26 15 29 18 M20 25 Q15 23 12 25 M20 25 Q25 22 28 25"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        )}
      </svg>
    </div>
  )
}
