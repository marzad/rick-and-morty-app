import React, {ChangeEvent} from "react";
import {Character} from "../models/Character";

type SearchBarProps = {
    searchTextFunction(searchText: string): void
}

export default function SearchBar(props: SearchBarProps){

    const onSearchTextChange = ((event: ChangeEvent<HTMLInputElement>) => {
        props.searchTextFunction(event.target.value)
    })

    return (
        //am besten gibts du auch value an müsstest dafür den wert über die props weiter geben oder die komponenten hirachie ändern
        <input onChange={onSearchTextChange}/>
    )


}