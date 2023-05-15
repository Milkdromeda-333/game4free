import Navbar from "./Navbar"


export default function Home({isMenuOpen, toggleMenu}) {
    
    return (
        <div className={`home ${isMenuOpen && "menu-is-open"}`}>
            <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
    )
}