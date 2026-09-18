'use client'

import { useCallback, useRef, useState } from 'react'
import { EnvelopeSplash } from '@/components/envelope-splash'

export default function Page() {
  const [opened, setOpened] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const handleOpen = useCallback(() => {
    setOpened(true)
    // Send a message to the iframe to start the music
    // Small delay to ensure iframe is mounted and listening
    setTimeout(() => {
      iframeRef.current?.contentWindow?.postMessage('start-music', '*')
    }, 200)
  }, [])

  return (
    <>
      {!opened && <EnvelopeSplash onOpen={handleOpen} />}
      {opened && (
        <iframe
          ref={iframeRef}
          src="/site.html"
          allow="autoplay"
          title="أحمد ونور — دعوة الزفاف"
          style={{
            position: 'fixed',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            zIndex: 1,
          }}
        />
      )}
    </>
  )
}
