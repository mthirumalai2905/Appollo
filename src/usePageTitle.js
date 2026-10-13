import { useEffect } from 'react'

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} – ASTRID`
      : 'ASTRID – Property operations, put into a system'
  }, [title])
}
