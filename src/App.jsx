import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [language, setLanguage] = useState('en') // 默认英文

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home language={language} onPageChange={setCurrentPage} />
      case 'about':
        return <About language={language} />
      case 'services':
        return <Services language={language} />
      case 'projects':
        return <Projects language={language} />
      case 'blog':
        return <Blog language={language} />
      case 'contact':
        return <Contact language={language} />
      default:
        return <Home language={language} onPageChange={setCurrentPage} />
    }
  }

  return (
    <div className="App">
      <Navbar onPageChange={setCurrentPage} language={language} setLanguage={setLanguage} />
      <main>
        {renderPage()}
      </main>
      <Footer language={language} />
    </div>
  )
}

export default App 