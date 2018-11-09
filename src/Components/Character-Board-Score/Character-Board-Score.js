import React, { Component } from 'react';

import "./Character-Board-Score.css"

const CharacterBoardScore = props => (
        <div id="characterBoardScoreBar">
            <div id="gameTitle">
                <h2>Mad Men Match</h2>
            </div>
            <div id="messageboard">
                <h2 className={props.message.indexOf('incorrectly') !== -1 ? 
                "desc-incorrect" : props.message.indexOf('correctly') !== -1 ?
                "desc-correct" : "desc-normal"}>
                    {props.message}
                </h2>
            </div>
            <div id="scoreBoard">
            <h2>Score: <span>{props.score}</span> | Top Score: <span>{props.highScore}</span></h2>
            </div>
        </div>
            
    );


export default CharacterBoardScore;