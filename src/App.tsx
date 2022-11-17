import React, {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import {Character} from "./models/Character";
import CharacterGalleryComponent from "./components/CharacterGalleryComponent";
import "./css/App.css"
import {RICK_AND_MORTY_CHARACTERS} from "./models/rickAndMortyCharacters";
import SearchBar from "./components/SearchBar";



function App(){

    const [searchCharacter, setSearchCharacter] = useState("");
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
    // setCharacters(RICK_AND_MORTY_CHARACTERS)

  const filtered = () => {

      let uniqueNames = new Set<string>()
      characters.map((characterItem) => {
              uniqueNames.add(characterItem.name.toLowerCase())
          }
      )
      if (uniqueNames.has(searchCharacter.toLowerCase())) {
          return characters.filter((character) => {
              return character.name.toLowerCase() === searchCharacter.toLowerCase()
          })
      } else {

          if (searchCharacter.toLowerCase() === "alive") {
              return characters.filter((character) => {
                  return character.status === "Alive"
              })
          }
          if (searchCharacter.toLowerCase() === "dead") {
              return characters.filter((character) => {
                  return character.status === "Dead"
              })
          }
          if (searchCharacter.toLowerCase() === "human") {
              return characters.filter((character) => {
                  return character.species === "human"
              })
          }
          if (searchCharacter.toLowerCase() === "nohuman") {
              return characters.filter((character) => {
                  return character.species !== "human"
              })
          }
          if (searchCharacter.toLowerCase() === "male") {
              return characters.filter((character) => {
                  return character.gender === "male"
              })
          }
          if (searchCharacter.toLowerCase() === "female") {
              return characters.filter((character) => {
                  return character.gender === "female"
              })
          }
      }
  }

  function agentFunction(searchText: string){
      setSearchCharacter(searchText)
  }

  return (
      <div className="App">

        <h1 className={"siteTitle"}>Rick and Morty App</h1>
        <br/>
          <div>
              <SearchBar searchTextFunction={agentFunction}/>
          </div>
        <div className ="charactersList">
          <CharacterGalleryComponent characterItems={RICK_AND_MORTY_CHARACTERS}/>
        </div>
      </div>
  );
}

export default App;
