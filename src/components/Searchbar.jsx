import { useEffect, useState, useRef } from "react";
// import axios from "axios";
import SearchResult from "./SearchResult";
// import { getAllGames } from "./utils";

export default function Searchbar({liveGames}) {

    const [userQuery, setUserQuery] = useState("");
    const [foundGames, setFoundGames] = useState(null);

    const myRef = useRef();
    const itemContainer = useRef();

    function updateQuery(e) {
        const { value } = e.target;
        setUserQuery(value);
        searchGames(value);
    }

    const resultsBoxesArr = foundGames?.map(game => <SearchResult key={game.id} {...game} />);

    function searchGames(value) {
        if (value) {
            const filteredGames = liveGames.filter(game => game.title.toLowerCase().trim().startsWith(value));
            setFoundGames(filteredGames);
        } else {
            setFoundGames([]);
        }
    }

    function resetQuery(e) {
        console.log(e.target)
        // DOCS checks if the target is anywhere but the results contianer
        if (e.target.nextSibling.className === "searchbar__results-container") {
            setUserQuery("");
            setFoundGames([]);
        }
        
    }
    
    return (
        <form className="searchbar">
            <input type="search"
                onChange={updateQuery}
                // onMouseLeave={resetQuery}
                className="searchbar__searchbar"
                value={userQuery}
                ref={(myRef)}
                placeholder="have a game in mind? search the name."
            />
            {foundGames?.length > 0 && <ul className="searchbar__results-container" ref={itemContainer}>{resultsBoxesArr}</ul>}
        </form>
    )
}