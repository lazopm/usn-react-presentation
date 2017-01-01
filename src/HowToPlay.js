import React from 'react';
const styles = {
    fontSize: '12px',
    display: 'inline-block',
    textAlign: 'left'
};
export default () => (
    <div style={styles}>
        <h4>How to play:</h4>
        <span>
            Try to guess every letter in the secret phrase.<br/>
            You have 5 lives, you lose a life when you guess wrong.<br/>
            Press letters on your keyboard to play!
        </span>
    </div>
);
