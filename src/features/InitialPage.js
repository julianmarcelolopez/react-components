// src/screens/InitialPage.js
import React from 'react';
import logo from '../logo.svg';
import HelloWorld from '../components/HelloWorld';
import Button from "../components/Button";
import Login from "../components/Login";
import '../styles/App.css'

const InitialPage = () => {
    const handleClick = () => {
        alert('¡Botón clickeado!');
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <HelloWorld />
            <Button
                text="Haz clic aquí"
                onClick={handleClick}
                style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}
            />
            <Login />
        </div>
    );
};

export default InitialPage;