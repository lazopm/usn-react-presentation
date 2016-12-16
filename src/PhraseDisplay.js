import React from 'react';

const letterSize = '40px';
const letterStyles = {
    fontSize: letterSize,
    marginRight: '5px'
}
const Letter = props => {
    const {char, revealed} = props;
    if (char === ' ') {
        return <span style={{display:'inline-block',width:letterSize}}/>;
    }
    return (
        <span style={letterStyles}>{revealed ? char : '_'}</span>
    );
}
const PhraseDisplay = props => {
    const {phrase, guesses} = props;
    const chars = phrase.split('');
    return (
        <div>
            {chars.map(char => (
                <Letter char={char} revealed={guesses.includes(char)}/>
            ))}
        </div>
    );
};

export default PhraseDisplay;
