- I bootstrapped using vite, installed yarn becasue it was reccomended to me, and then installed sass and configured the input and putput directory with sass --watch input:output. Now, I am looking into sass file architechture.
- I am learning about sass file architechture and here are my notes:
    - create "_index.css" files in folders that "forward" the directory's files in them so to "use" them in an index.scss folder that will combine all styles at the root of the sass styles folder. 
    - FILES
        - BASE: boilerplate css like resets, typography, standard styles like for buttons.
        - ABSTRACTS: non output files(styles that are not directly put into compiled css) such as mixins, variables, functions
        - COMPONENTS: re-usable styles for small components
    - to watch for sass changes, run "sass --watch [directory to sass index file] [directory to css file]". Youll have to pre-create the output file i think.
    - To use variables inport the abstracts file like "@use '../abstracts"'
- I FIGURED OUT HOW TO RETURN DATA FROM A HTTP REQUEST USING A UTIL FUNCTION. Basically, return the axios call and within it return the data fetched. Them in the module importing the util, create an asyncrounous function withing the useEffect and use the data there! example is in `src/components/Home`


Dump:


export default function Home() {
    
    return (
        <div className="home">
            hello!
        </div>
    )
}

<!-- game -->
<!-- {
  {
    "id": 540,
    "title": "Overwatch 2",
    "thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
    "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
    "game_url": "https://www.freetogame.com/open/overwatch-2",
    "genre": "Shooter",
    "platform": "PC (Windows)",
    "publisher": "Activision Blizzard",
    "developer": "Blizzard Entertainment",
    "release_date": "20developer22-10-04",
    "freetogame_profile_url": "https://www.freetogame.com/overwatch-2"
  }
} -->

##  FEATURES TODO:
- [  ] make logo animate on hover
- [ x ] make charecter change onmount