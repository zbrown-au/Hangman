import * as React from 'react';
import logo from "../../assets/images/hangman.png";

const Header: React.FunctionComponent = () => {
    return (
        <header>
            <img src={logo} />
            <h1>Hangman</h1>
        </header>
    );
}

export default Header;