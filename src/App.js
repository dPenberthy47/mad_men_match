import React, { Component } from 'react';

import Header from "./Components/Header";
import CharacterBoard from "./Components/Character-Board";


const App = () => {
        return (
            <div className="container">
                <Header />
                <CharacterBoard />
            </div>
        );
    }


export default App;