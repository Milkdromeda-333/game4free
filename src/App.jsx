import { useEffect, useState } from 'react'
import Home from "./components/Home"
import Menu from "./components/Menu"

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  }

  return (
    <div className='app'>
      <Menu isMenuOpen={isMenuOpen}  />
      <Home isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
    </div>
  )
}

export default App
