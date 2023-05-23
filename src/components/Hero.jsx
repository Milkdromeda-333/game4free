import Searchbar from './Searchbar';

export default function Hero({liveGames}) {
    
    return (
        <header className="hero">
            <h1>Explore free games</h1>
            <Searchbar {...liveGames} />
        </header>
    )
}