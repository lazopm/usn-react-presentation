import React, {Component} from 'react';
import PhraseDisplay from './PhraseDisplay';

const strikeThrough = {
    textDecoration: 'line-through'
};
const guessStyles = {
    fontStyle: 'italic',
    marginRight: '4px'
};
const wrongGuessStyles = Object.assign({}, guessStyles, strikeThrough);

class App extends Component {
    render() {
        const {phrase, lives, guesses} = this.props.state;
        const {title, reset} = this.props;
        if (lives <= 0) {
            return (
                <div>
                    <h1>GAME OVER</h1>
                    <button onClick={reset}>Reset</button>
                </div>
            );
        }
        return (
            <div>
                <div>{title}</div>
                <PhraseDisplay phrase={phrase} guesses={guesses}/>
                <div>
                    {guesses.map( g => (
                        <span style={(phrase.includes(g) ? guessStyles : wrongGuessStyles)}>
                            {` ${g} `}
                        </span>
                    ))}
                </div>
                <div>
                    HP: {Array(lives).fill('♥').join(' ')}
                </div>
            </div>
        );
    }
}

export default App;


