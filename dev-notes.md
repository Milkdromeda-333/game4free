- I bootstrapped using vite, installed yarn becasue it was reccomended to me, and then installed sass and configured the input and putput directory with sass --watch input:output. Now, I am looking into sass file architechture.
- I am learning about sass file architechture and here are my notes:
    - create "_index.css" files in folders that "forward" the directory's files in them so to "use" them in an index.scss folder that will combine all styles at the root of the sass styles folder. 
    - FILES
        - BASE: boilerplate css like resets, typography, standard styles like for buttons.
        - ABSTRACTS: non output files(styles that are not directly put into compiled css) such as mixins, variables, functions
        - COMPONENTS: re-usable styles for small components
    - to watch for sass changes, run "sass --watch [directory to sass index file] [directory to css file]". Youll have to pre-create the output file i think.
    - To use variables inport the abstracts file like "@use '../abstracts"'


Dump:
export default function Home() {
    
    return (
        <div className="home">
            hello!
        </div>
    )
}

##  FEATURES TODO:
- [  ] make logo animate on hover
- [  ] make charecter change onmount