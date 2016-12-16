import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const appState = {
    phrase: 'react is cool',
    guesses: [],
    lives: 5
};

const renderApp = () => {
    ReactDOM.render(
        <App state={appState} title="Word Game"/>,
        document.getElementById('root')
    );
};
renderApp();

//listen for keypresses
document.onkeypress = e => {
    const key = e.key.toLowerCase();
    //check if the letter is already guesses
    if (!appState.guesses.includes(key)) {
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
