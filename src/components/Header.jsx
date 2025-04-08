import { Link } from 'react-router-dom'
import logo from '../assets/terra_logo_header_site.png'

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Terra House Logo" className="w-16 h-16 rounded-full" />
        <h1 className="text-xl font-bold text-blue-800">Terra House</h1>
      </div>
      <nav className="flex gap-4 mt-2 md:mt-0">
        <Link to="/" className="text-blue-600 hover:underline">Acasă</Link>
        <Link to="/apartment-1" className="text-blue-600 hover:underline">Apartament 1</Link>
        <Link to="/apartment-2" className="text-blue-600 hover:underline">Apartament 2</Link>
        <Link to="/gallery" className="text-blue-600 hover:underline">Galerie</Link>
        <Link to="/testimonials" className="text-blue-600 hover:underline">Testimoniale</Link>
        <Link to="/blog" className="text-blue-600 hover:underline">Blog</Link>
        <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
      </nav>
    </header>
  );
}
