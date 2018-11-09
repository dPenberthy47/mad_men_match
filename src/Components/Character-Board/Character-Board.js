import React, { Component } from 'react';

import "./Character-Board.css";


import CharacterBoardList from '../Character-Board-List/Character-Board-List';
import CharacterBoardScore from '../Character-Board-Score/Character-Board-Score';
import characters from '../characters.json';


class CharacterBoard extends Component {
    

        state = {
            characters: characters,
            unclicked: characters,
            score: 0,
            highScore: 0,
            message: ""
        }

        shuffleCharacters = characterCards => {
            for (let i = characterCards.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                console.log(j);
                [characterCards[i], characterCards[j]] = [characterCards[j], characterCards[i]];
            }
            return characterCards;
        }

        selectCharacter = name => {
            const findCharacter = this.state.unclicked.find(characters => characters.name === name);

            if (findCharacter === undefined) {
                this.setState({
                    message: "oops, you've already selected that character",
                    highScore: (this.state.highScore > this.state.score ? this.state.highScore : this.state.score),
                    score: 0,
                    unclicked: characters
                });
            } else {
                const newCharacters = this.state.unclicked.filter(characters => characters.name !== name);
                 this.setState({
                    score: this.state.score + 1,
                    highScore: (this.state.highScore > this.state.score ? this.state.highScore : this.state.score),
                    unclicked: newCharacters,
                    characters: characters,
                    message: (this.state.score == 12 ? "Congrats, you WIN!" : "nicely, done")
                 })
            }
            this.shuffleCharacters(characters)
        }


    render() {
        return (
            <div>
                <CharacterBoardScore 
                    message={this.state.message}
                    highScore={this.state.highScore}
                    score={this.state.score}
                />
                <div id="cards">
                    <ul>
                    {this.state.characters.map((character, i) => (
                        <CharacterBoardList
                            id={character.id}
                            name={character.name}
                            image={character.image}
                            unclicked={character.unclicked}
                            selectCharacter={this.selectCharacter}
                            key = {i}
                        />
                    ))}
                    </ul>
                </div>
            </div>

        );
    }
}
console.log(characters);
export default CharacterBoard;
