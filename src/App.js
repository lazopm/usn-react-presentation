import React, {Component} from 'react';
import PhraseDisplay from './PhraseDisplay';

const guessesStyles = {
    fontStyle: 'italic'
};

class App extends Component {
    render() {
        const {phrase, lives, guesses} = this.props.state;
        const {title} = this.props;
        if (lives <= 0) {
            return <h1>GAME OVER</h1>;
        }
        return (
            <div>
                <div>{title}</div>
                <PhraseDisplay phrase={phrase} guesses={guesses}/>
                <div style={guessesStyles}>{guesses.join(' ')}</div>
                <div>Lives: {lives}</div>
            </div>
        );
    }
}

export default App;


