import * as React from 'react';
import logo from "../../resources/hangman.png";

const Header: React.FunctionComponent = () => {
    return (
        <header className="App-header">
            <img src={logo} />
            <h1>Hangman</h1>
        </header>
    );
}

export default Header;