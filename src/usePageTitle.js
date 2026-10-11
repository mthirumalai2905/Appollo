import { useEffect } from 'react'

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} – Appollo`
      : 'Appollo – Property operations, put into a system'
  }, [title])
}
