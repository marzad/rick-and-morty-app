import React from "react";

import {ChangeEvent, useState} from "react";
import {Character} from "../models/Character";

import "../css/CharacterGallery.css"
import CharacterCardComponent from "./CharacterCardComponent";

type CharactersGalleryProps = {
    characterItems: Character[]
}

export default function CharacterGalleryComponent(props: CharactersGalleryProps){

    let [searchCharacter, setSearchCharacter] = useState("");
    let [filteredCharacter, setFilteredCharacter] = useState(props.characterItems);

    const textOutput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchCharacter(event.target.value)
    }

    function deleteCharacter(id: number) {
        const characters: Character[] = props.characterItems.filter((character) =>{
            if(character.id !== id){
                return character
            }
        })
        setFilteredCharacter(characters)
    }

    const filtered = () => {
        let filteredCharacters = filteredCharacter

        let uniqueNames = new Set<string>()
        filteredCharacter.map((characterItem) => {
                uniqueNames.add(characterItem.name.toLowerCase())
            }
        )
        if (uniqueNames.has(searchCharacter.toLowerCase())) {
            filteredCharacters = filteredCharacter.filter((character) => {
                return character.name.toLowerCase() === searchCharacter.toLowerCase()
            })
        } else {

            if (searchCharacter.toLowerCase() === "alive") {
                filteredCharacters = filteredCharacter.filter((character) => {
                    return character.status === "Alive"
                })
            }
            if (searchCharacter.toLowerCase() === "dead") {
                filteredCharacters = filteredCharacter.filter((character) => {
                    return character.status === "Dead"
                })
            }
            if (searchCharacter.toLowerCase() === "human") {
                filteredCharacters = filteredCharacter.filter((character) => {
                    return character.species === "human"
                })
            }
            if (searchCharacter.toLowerCase() === "nohuman") {
                filteredCharacters = filteredCharacter.filter((character) => {
                    return character.species !== "human"
                })
            }
            if (searchCharacter.toLowerCase() === "male") {
                filteredCharacters = filteredCharacter.filter((character) => {
                    return character.gender === "male"
                })
            }
            if (searchCharacter.toLowerCase() === "female") {
                filteredCharacters = filteredCharacter.filter((character) => {
                    return character.gender === "female"
                })
            }
        }
        return filteredCharacters.map((characterItem, index) => {
                return <CharacterCardComponent characterItem={characterItem} key={index} deleteFunction={deleteCharacter}/>
            }
        )
    }

    return (
        <>
            <div>
                <input onChange={textOutput}/>
            </div>
            <div className={"charactersList"}>
                {filtered()}
            </div>

        </>


    )

}