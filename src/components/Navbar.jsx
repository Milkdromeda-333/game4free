

export default function Navbar({toggleMenu}) {
    
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src="https://img.icons8.com/color/48/sonic-the-hedgehog-1.png" alt="logo" />
                <span>Game4Free</span>
            </div>
            <span className="navbar__savedGames" onClick={toggleMenu}>Saved Games</span>
        </nav>
    )
}