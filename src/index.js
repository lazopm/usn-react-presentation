import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const appState = {}; 
const initialAppState = {
    phrase: 'react is cool',
    guesses: [],
    lives: 5
};
//resets app state to initial values
const resetState = () => Object.assign(appState, initialAppState);
resetState();

//renders app with current state
const renderApp = () => {
    const reset = () => {
        resetState();
        renderApp();
    };
    ReactDOM.render(
        <App state={appState}  reset={reset} />,
        document.getElementById('root')
    );
};

//initial render
renderApp();

//listen for keypresses
document.onkeypress = e => {
    const key = e.key.toLowerCase();
    //check if the letter is already guessed
    if (/^[a-z]$/.exec(key) && !appState.guesses.includes(key)) {
        const livesLost = appState.phrase.includes(key) ? 0 : 1;
        //mutate state
        Object.assign(appState, {
            guesses: [...appState.guesses, key],
            lives: appState.lives - livesLost 
        });
        //rerender
        renderApp();
    }
}
