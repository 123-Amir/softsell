import { useContext } from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Navbar from './components/Navbar'
import ChatWidget from './components/ChatWidget'
import { DarkModeProvider, DarkModeContext } from './context/DarkModeContext'

function MainContent() {
  const context = useContext(DarkModeContext)
  if (!context) return null // Prevent error if context not ready

  const { darkMode, toggleDarkMode } = context

  return (
    <div className={`font-sans min-h-screen ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Padding top for fixed navbar */}
      <div className="pt-16">
        <section id="hero"><Hero /></section>
        <section id="how"><HowItWorks /></section>
        <section id="why"><WhyChooseUs /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><ContactForm /></section>
      </div>

      {/* Floating Chat Widget */}
      <ChatWidget />
    </div>
  )
}

export default function App() {
  return (
    <DarkModeProvider>
      <MainContent />
    </DarkModeProvider>
  )
}


