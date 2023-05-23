import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
import GameBox from "./GameBox";

export default function Slider({ games }) {
    
    const gameBoxArr = games?.map(game => <GameBox key={game.id} game={game} />);
    
    return (
        <div className="slider">
            <div className="slider__arrow">
                <TbArrowBigLeft />
            </div>

            <div className="slider__games-container">
                {gameBoxArr && gameBoxArr}
            </div>

            <div className="slider__arrow">
                <TbArrowBigRight />
            </div>
        </div>
    )
}