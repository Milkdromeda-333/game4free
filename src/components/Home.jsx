import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero"
import Slider from "./Slider";
import { HiDesktopComputer } from "react-icons/hi";
import { TbBrowser } from "react-icons/tb";

import { getAllGames, getGamesByPlatform } from "../utils/utils";

export default function Home({ isMenuOpen, toggleMenu }) {

    const [pcGames, setPcGames] = useState([]);
    const [browserGames, setBrowserGames] = useState([]);
    const [liveGames, setLiveGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            const fetchedLiveGames = await getAllGames();
            setLiveGames(fetchedLiveGames);
        }
        fetchGames();

        const fetchPcGames = async () => {
            const fetchedPcGames = await getGamesByPlatform("pc");
            setPcGames(fetchedPcGames);
        };
        fetchPcGames();

        const fetchBrowserGames = async () => {
            const fetchedBrowserGames = await getGamesByPlatform("pc");
            setBrowserGames(fetchedBrowserGames);
        };
        fetchBrowserGames();
    }, []);
    
    return (
        <div className={`home ${isMenuOpen && "menu-is-open"}`}>

            <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

            <Hero liveGames={liveGames} />

            <div className="home__section--slider">
                <h2 className="games-by-platform">
                    PC Games
                    <HiDesktopComputer className="icon" />
                </h2>
                <Slider games={pcGames} />
            </div>

            <div className="home__section--slider">
                <h2 className="games-by-platform">
                    Browser Games
                    <TbBrowser className="icon" />
                </h2>
                <Slider games={browserGames} />
            </div>
        </div>
    )
}