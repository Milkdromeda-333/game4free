import axios from "axios";

/*  
*   ===========
*   HELPERS
*   ===========
*/

function returnOptions(endpoint) {
    return {
        method: 'GET',
        url: `https://free-to-play-games-database.p.rapidapi.com/api/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'ab056877aemshde15c09950613b1p18f654jsn08cf22bdd987',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
};

function axiosHelper(options) {
    return axios.request(options)
        .then(response => { return response.data; })
        .catch(err => console.log(err));
}

/*  
*   ===========
*   EXPORTS
*   ===========
*/

export function getGamesByPlatform(platform) {
    const options = returnOptions(`games?platform=${platform}`);
    return axiosHelper(options);


}

export function getAllGames() {
    const options = returnOptions("games");
    return axiosHelper(options);
}