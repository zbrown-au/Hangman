import * as React from 'react';
import * as _ from 'lodash';
import classNames from 'classnames';
import { ILetter } from './../types/Letter';
import { observer } from 'mobx-react';
import store from '../data/Store';

interface IProps {
    letter: ILetter;
}

function onLetterClick (letter: ILetter) {
    if (!letter.isUsed && !store.isGameOver) {
        let index = _.findIndex(store.letters, x => x.code === letter.code);

        if (!letter.isInPhrase) {
            store.guessesLeft--;
        }

        store.letters[index].isUsed = true;
    }
}

const Letter: React.FunctionComponent<IProps> = (props) => {
    let code = props.letter.code;
    let char = props.letter.char;
    let isInPhrase = props.letter.isInPhrase;
    let isUsed = props.letter.isUsed;

    let buttonClasses = classNames({
        'letter': true,
        'not-in-phrase': isUsed && !isInPhrase,
        'in-phrase': isUsed && isInPhrase
    });
    
    return (
        <button type="button" className={buttonClasses} value={char} onClick={onLetterClick.bind(null, props.letter)}>{char}</button>
    );
}

export default observer(Letter);

