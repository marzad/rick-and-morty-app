import React from "react";
import "../css/CharacterCard.css"
import {Character} from "../models/Character";

type CharactersCardProps = {
    characterItem: Character
    deleteFunction(idToDelete: number): void
}

export default function CharacterCardComponent(props: CharactersCardProps){

    const deleteCharacterButton = () => {
        props.deleteFunction(props.characterItem.id)
    }

    return (
        <div className={"characterCard"}>
            <p id={"Name"}>{props.characterItem.name}</p>
            <img src={props.characterItem.image} alt={"Image"}/>
            <p>{props.characterItem.location.name}</p>
            <div><button onClick={deleteCharacterButton}>Delete</button></div>
        </div>
    )
}