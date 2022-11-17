import React, {useEffect, useState} from "react";
import axios from "axios";
import {Character} from "../../untitled1/src/models/Character";
import CharacterGalleryComponent from "./components/CharacterGalleryComponent";
import "./css/App.css"



function App(){


  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    getCharacters()
  },[])

  function getCharacters(){
    axios.get("https://rickandmortyapi.com/api/character")
        .then((response) => {
          //console.log(response.data.results)
          setCharacters(response.data.results)
        })
    console.log(characters)
  }

  return (
      <div className="App">


        <h1 className={"siteTitle"}>Rick and Morty App</h1>
        <br/>
        {/*        <div>
            {CounterExample()}
        </div>*/}


        <div className ="charactersList">

          <CharacterGalleryComponent characterItems={characters}/>

        </div>
      </div>
  );
}

export default App;
