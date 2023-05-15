export default function Menu({savedGames, isMenuOpen}) {
    
    return (
        <div className={`menu ${isMenuOpen && "open"}`}>
            <h2>Menu</h2>
            {savedGames ? savedGames : "No saved games yet."}
        </div>
    )
}