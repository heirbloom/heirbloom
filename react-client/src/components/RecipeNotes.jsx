import React, { Component } from "react";
import "../App.css";

const RecipeNotes = (props) => {

const { notes } = props;
const list = notes.map( note => (
    <li>
        {note}
    </li>
));   
    return (
        <ul>{list}</ul>
    )
}

export default RecipeNotes;