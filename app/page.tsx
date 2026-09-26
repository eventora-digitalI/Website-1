'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { EnvelopeSplash } from '@/components/envelope-splash'

export default function Page() {
  const [opened, setOpened] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  const syncMusicState = useCallback((playing: boolean) => {
    iframeRef.current?.contentWindow?.postMessage(
      { type: 'music-state', playing },
      '*'
    )
  }, [])

  // Trigger audio playback instantly on the user click gesture
  const handleStartOpen = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.8
      audioRef.current.play().catch((err) => {
        console.warn('Audio play request failed:', err)
      })
    }
  }, [])

  const handleOpen = useCallback(() => {
    setOpened(true)
    if (audioRef.current && !audioRef.current.paused) {
      syncMusicState(true)
    }
  }, [syncMusicState])

  // Listen for control messages from inside the iframe (floating music button)
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (!e.data) return
      const type = typeof e.data === 'string' ? e.data : e.data.type

      if (type === 'toggle-music') {
        if (audioRef.current) {
          if (audioRef.current.paused) {
            audioRef.current.play().catch(() => {})
          } else {
            audioRef.current.pause()
          }
        }
      } else if (type === 'get-music-state') {
        if (audioRef.current) {
          syncMusicState(!audioRef.current.paused)
        }
      } else if (type === 'start-music') {
        if (audioRef.current && audioRef.current.paused) {
          audioRef.current.play().catch(() => {})
        }
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [syncMusicState])

  return (
    <>
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
        onPlay={() => syncMusicState(true)}
        onPause={() => syncMusicState(false)}
      />

      {!opened && (
        <EnvelopeSplash
          onOpen={handleOpen}
          onStartOpen={handleStartOpen}
        />
      )}

      <iframe
        ref={iframeRef}
        src="/site.html"
        allow="autoplay"
        title="أحمد ونور — دعوة الزفاف"
        onLoad={() => {
          if (audioRef.current) {
            syncMusicState(!audioRef.current.paused)
          }
        }}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          zIndex: opened ? 1 : 0,
          visibility: opened ? 'visible' : 'hidden',
        }}
      />
    </>
  )
}
