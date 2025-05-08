import { useState, useEffect } from "react"
import { FiSun, FiMoon } from "react-icons/fi"

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-lg fixed w-full z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold">SoftSell</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#how" className="hover:text-blue-600">How It Works</a>
            <a href="#why" className="hover:text-blue-600">Why Choose Us</a>
            <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>

          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {darkMode ? <FiSun size={20}/> : <FiMoon size={20}/>}
          </button>
        </div>
      </div>
    </nav>
  )
}
