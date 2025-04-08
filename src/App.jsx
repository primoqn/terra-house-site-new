import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Apartment1 from './pages/Apartment1'
import Apartment2 from './pages/Apartment2'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apartment-1" element={<Apartment1 />} />
          <Route path="/apartment-2" element={<Apartment2 />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
