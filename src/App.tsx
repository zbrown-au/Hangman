import * as React from 'react';
import './App.css';
import { observer } from 'mobx-react';
import Header from './components/layout/Header';
import Letters from './components/Letters';
import Phrase from './components/Phrase';
import Outcome from './components/Outcome';
import store from './data/Store';

class App extends React.Component {
  async componentDidMount() {
    await this.loadNewPhrase();
  }

  loadNewPhrase = () => {
    store.loadNewPhrase();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Phrase />
        <Letters />
        {store.isGameOver &&
          <Outcome />
        }
        <div>
          <button type="button" onClick={this.loadNewPhrase}>NEW GAME</button>
        </div>
      </div>
    );
  }
}

export default observer(App);
