import { useEffect, useState } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";

export default function Searchbar() {

    const [userQuery, setUserQuery] = useState(null);
    const [liveGames, setLiveGames] = useState([]);
    const [foundGames, setFoundGames] = useState([]);

    function updateQuery(e) {
        const { value } = e.target;
        setUserQuery(value);
        searchGames(value);
    }

    const resultsBoxesArr = foundGames.map(game => <SearchResult key={game.id} {...game} />)

    function searchGames(value) {
        if (value) {
            const filteredGames = liveGames.filter(game => game.title.toLowerCase().trim().startsWith(value));
            setFoundGames(filteredGames);
        } else {
            setFoundGames([]);
        }
    }

    function resetQuery() {
        setUserQuery("");
        setFoundGames([]);
    }

    useEffect(() => {
        if (userQuery === null) {
            const options = {
                method: 'GET',
                url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
                headers: {
                    'X-RapidAPI-Key': 'ab056877aemshde15c09950613b1p18f654jsn08cf22bdd987',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            axios.request(options)
                .then(response => { setLiveGames(response.data); })
                .catch(err => console.log(err));
        }
    }, []);
    
    return (
        <form className="searchbar" onBlur={ resetQuery }>
            <input type="search"
                onChange={updateQuery}
                className="searchbar__searchbar"
                value={userQuery}
                placeholder="have a game in mind? search the name."
            />
            <ul className="searchbar__results-container">{resultsBoxesArr}</ul>
        </form>
    )
}