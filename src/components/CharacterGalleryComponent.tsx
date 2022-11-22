import React from "react";

import {ChangeEvent, useState} from "react";
import {Character} from "../models/Character";

import "../css/CharacterGallery.css"
import CharacterCardComponent from "./CharacterCardComponent";

type CharactersGalleryProps = {
    characterItems: Character[]
}

export default function CharacterGalleryComponent(props: CharactersGalleryProps){


    //der state kann hier eine const sein
    let [filteredCharacter, setFilteredCharacter] = useState(props.characterItems);

    function deleteCharacter(id: number) {
        const characters: Character[] = props.characterItems.filter((character) =>{
            if(character.id !== id){
                return character
            }
        })
        setFilteredCharacter(characters)
    }

    //bitte sinnvolle Variabel Namen wählen
    const a = filteredCharacter.map((characterItem, index) => {
                return <CharacterCardComponent characterItem={characterItem} key={index} deleteFunction={deleteCharacter}/>
            }
        )


    return (
        <>

            <div className={"charactersList"}>
                {a}
            </div>

        </>


    )

}