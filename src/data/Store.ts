import * as _ from 'lodash';
import { observable, action, computed, IObservableArray } from 'mobx';
import { ILetter } from '../types/Letter';
import { baconIpsumApi } from './BaconIpsumApi';

const CharACode = 65;
const CharZCode = 91;
const MaxGuesses = 10;

class Store {
    @observable loading = true;
    @observable phrase = '';
    @observable guessesLeft = MaxGuesses;
    @observable letters: IObservableArray<ILetter> = observable.array(Array<ILetter>());

    @action
    async loadNewPhrase() {
        this.loading = true;

        var phrase = await baconIpsumApi.getPhrase();
        this.phrase = phrase.toUpperCase();

        let letters: Array<ILetter> = [];
        
        // Build char array for A-Z
        for(let i=CharACode; i<CharZCode; i++) {
            let isInPhase = store.phrase.split('').indexOf(String.fromCharCode(i)) >= 0;
    
            letters.push({code: i, char: String.fromCharCode(i), isUsed: false, isInPhrase: isInPhase});
        }
    
        this.letters = observable.array(letters);
        this.guessesLeft = MaxGuesses;

        this.loading = false;
    }

    @computed
    get guesses() {
        let usedLetters = _.filter(this.letters, function(x) { return x.isUsed; });

        let guesses = Array<string>();

        usedLetters.map(letter => 
            guesses.push(letter.char)
        );

        return 'Guesses: ' + guesses.join('');
    }

    @computed
    get displayPhrase() {
        return this.phrase;
    }

    @computed
    get isGameOver() {
        let anyUnusedLetters = _.filter(this.letters, function(x) { return !x.isUsed && x.isInPhrase; }).length > 0;
        let anyGuessesLeft = this.guessesLeft > 0

        return !anyUnusedLetters || !anyGuessesLeft;
    }

    @computed
    get obfuscatedPhrase() {
        let obfuscatedPhrase = this.phrase;
        
        let unusedLetters = _.filter(this.letters, function(x) { return !x.isUsed; });

        unusedLetters.map(letter => {
            if (obfuscatedPhrase.indexOf(letter.char) >= 0) {
                obfuscatedPhrase = obfuscatedPhrase.replace(new RegExp(letter.char, 'g'), "-");
            }
        });

        return obfuscatedPhrase;
    }}

const store = new Store();

export default store;