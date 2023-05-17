import Navbar from "./Navbar"
import Hero from "./Hero"

export default function Home({isMenuOpen, toggleMenu}) {
    
    return (
        <div className={`home ${isMenuOpen && "menu-is-open"}`}>
            <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            <Hero />
        </div>
    )
}