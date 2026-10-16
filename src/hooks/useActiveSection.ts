import { useEffect, useState } from 'react'

// How far down the viewport a section's top must pass to count as current
const ACTIVATION_LINE = 0.35

// Returns the id of the section currently being read, or undefined
export default function useActiveSection(ids: string[]): string | undefined {
  const [active, setActive] = useState<string>()
  const key = ids.join(',')

  useEffect(() => {
    const sectionIds = key.split(',')
    let frame = 0

    const update = (): void => {
      frame = 0
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      if (scrolledToBottom) {
        setActive(sectionIds[sectionIds.length - 1])
        return
      }

      const line = window.innerHeight * ACTIVATION_LINE
      let current: string | undefined
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }

    const onScroll = (): void => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [key])

  return active
}
