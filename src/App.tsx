import { useEffect, useState } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import News from './pages/News'

export default function App() {
  const [page, setPage] = useState<string>('home')

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash

      if (hash === '#about') {
        setPage('about')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (
        hash === '#news' ||
        hash.startsWith('#news-article-')
      ) {
        setPage('news')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setPage('home')
      }
    }

    window.addEventListener('hashchange', onHash)
    onHash()
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (page === 'about') return <About />
  if (page === 'news') return <News />
  return <Home />
}