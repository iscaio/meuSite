import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      {page === 'home' && <Home onNavigate={setPage} />}
      {page === 'about' && <About onNavigate={setPage} />}
    </>
  )
}
