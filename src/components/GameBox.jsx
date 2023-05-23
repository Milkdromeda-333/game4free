

export default function GameBox({game}) {
    
    return (
        <div className="game-box">
            <img src={game.thumbnail}
                alt={game.title}
                className="gamebox__img"
            />
            <h3 className="gamebox__title">{game.title}</h3>
            <p>{ game.short_description }</p>
        </div>
    )
}