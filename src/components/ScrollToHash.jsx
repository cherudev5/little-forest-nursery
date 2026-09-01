import * as React from "react"
import { useLocation } from "react-router-dom"

/**
 * Scrolls to the element matching the current URL hash whenever the
 * location changes (route change or hash change), so links like
 * "/#nursery" work the same whether you're already on the page or not.
 * Scrolls to the top when there is no hash.
 */
export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  React.useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "")
      // wait a tick so the destination route has rendered
      const frame = requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      })
      return () => cancelAnimationFrame(frame)
    }
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [pathname, hash])

  return null
}
