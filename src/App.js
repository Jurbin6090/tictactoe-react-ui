import React from 'react';
import './App.css';
import GameData from "./containers/GameData";

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <GameData/>
                </header>
            </div>
        );
    }
}