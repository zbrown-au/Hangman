import * as React from 'react';
import './assets/styles/App.scss';
import { observer } from 'mobx-react';
import Header from './components/layout/Header';
import Loader from './components/layout/Loader';
import Keyboard from './components/Keyboard';
import Phrase from './components/Phrase';
import Outcome from './components/Outcome';
import store from './data/Store';
import { Container, Row, Col } from 'react-bootstrap'

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
        <Container bsPrefix="page">
          <Row>
            <Col>
              <Loader isLoading={store.loading}>
                <Phrase />
                <Keyboard />
                {store.isGameOver &&
                  <Outcome />
                }
              </Loader>        
              <div>
                <button type="button" onClick={this.loadNewPhrase}>NEW GAME</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default observer(App);
