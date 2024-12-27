import { Route, Routes } from 'react-router-dom'
import Favorites from './pages/Client/Favorites'
import Header from './pages/Client/Header'
import Home from './pages/Client/Home'
import About from './pages/Client/About'
import Contact from './pages/Client/Contact'


function App() {

  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorites" element={<Favorites />} />

      </Routes>
    </>
  )
}

export default App
