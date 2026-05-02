import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Preloader from "./components/Preloader"
import Cursor from "./components/Cursor"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500) // Slightly longer than preloader

    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <Cursor />
      {loading && <Preloader />}
      <Header />
      <main className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
