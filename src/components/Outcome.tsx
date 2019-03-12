import * as React from 'react';
import { observer } from 'mobx-react';
import store from '../data/Store';

const Outcome: React.FunctionComponent = () => {
    let outcome;
        
    outcome = store.guessesLeft > 0
        ? <p className="result success">You win!</p>
        : <p className="result fail">Such is life!</p>

    return (
        <div className="outcome">
            <h2>Game Over</h2>
            {outcome}
        </div>
    );
};

export default observer(Outcome);