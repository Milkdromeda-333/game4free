import { useState } from "react"
/* 
when user types in letters for the name of a game it returns cards that match the query.
*/
export default function Searchbar() {

    const [userQuery, setUserQuery] = useState('');

    function updateQuery(e) {
        const { value } = e.target;
        setUserQuery(value);
        console.log(userQuery);
    }
    
    return (
        <form className="searchbar">
            <input type="search"
                name="search"
                id="seacrch"
                onChange={updateQuery}
                className="searchbar__searchbar"
                placeholder="have a game in mind? search the name."
            />
        </form>
    )
}