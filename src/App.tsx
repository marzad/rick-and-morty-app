import React, {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import {Character} from "./models/Character";
import CharacterGalleryComponent from "./components/CharacterGalleryComponent";
import "./css/App.css"
import {RICK_AND_MORTY_CHARACTERS} from "./models/rickAndMortyCharacters";
import SearchBar from "./components/SearchBar";



export default function App(){

    const [searchCharacter, setSearchCharacter] = useState("");
  const [characters, setCharacters] = useState<Character[]>([])


  useEffect(() => {
    getCharacters()
  },[])

  function getCharacters(){
    axios.get("https://rickandmortyapi.com/api/character")
        .then((response) => {
            //auskommentierten code entfernen
          //console.log(response.data.results)
          setCharacters(response.data.results)
        })
    //console.logs entfernen
    console.log(characters)
  }
//auskommentierten code entfernen
/*
      let newList = characters;

      let uniqueNames = new Set<string>()
      characters.map((characterItem) => {
              uniqueNames.add(characterItem.name.toLowerCase())
          }
      )

      if (uniqueNames.has(searchCharacter.toLowerCase())) {
          newList = characters.filter((character) => {
              return character.name.toLowerCase() === searchCharacter.toLowerCase()
          })
      } else {

          if (searchCharacter.toLowerCase() === "alive") {
              newList = characters.filter((character) => {
                  return character.status.toLowerCase() === "alive"
              })
          }
          if (searchCharacter.toLowerCase() === "dead") {
              newList = characters.filter((character) => {
                  return character.status.toLowerCase() === "dead"
              })
          }
          if (searchCharacter.toLowerCase() === "human") {
              newList = characters.filter((character) => {
                  return character.species.toLowerCase() === "human"
              })
          }
          if (searchCharacter.toLowerCase() === "nohuman") {
              newList = characters.filter((character) => {
                  return character.species.toLowerCase() !== "human"
              })
          }
          if (searchCharacter.toLowerCase() === "male") {
              newList = characters.filter((character) => {
                  return character.gender.toLowerCase() === "male"
              })
          }
          if (searchCharacter.toLowerCase() === "female") {
              newList = characters.filter((character) => {
                  return character.gender.toLowerCase() === "female"
              })
          }
      }
      setCharacters(newList)*/

    const filteredCharacters = characters.filter((character) => {
        if(character.name.toLowerCase().includes(searchCharacter.toLowerCase())){
            return true
        }
        return false
    })


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
          <CharacterGalleryComponent characterItems={filteredCharacters}/>
        </div>
      </div>
  );
}

