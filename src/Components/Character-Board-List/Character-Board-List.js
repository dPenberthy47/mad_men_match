 import React, { Component } from 'react';

 import "./Character-Board-List.css";

 const CharacterBoardList = props => {


    return (
        <div className="card">
            <div className="img-container">
                <img onClick={() => props.selectCharacter(props.name)} 
                    className={props.score === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
                alt={props.name} src={props.image} />
                {console.log(props)}
            </div>
        </div>
    );
 };

 export default CharacterBoardList;