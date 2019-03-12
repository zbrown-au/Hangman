import axios from 'axios';

class BaconIpsumApi {
    async getPhrase() {
        const baconGoodness = await axios.get('https://baconipsum.com/api/?type=all-meat&sentences=1');
        // Get random number of words between 1 and 5
        let numWords = Math.floor(Math.random()*5)+1;
        let phrase = baconGoodness.data[0]
          .replace(new RegExp("[,.-]", 'g'), "")
          .split(' ')
          .slice(0,numWords)
          .join(' ');

          return phrase;
    }
}

export const baconIpsumApi = new BaconIpsumApi();