import React, { useContext, useReducer } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'wouter';
import Navbar from './components/Navbar';
import reducer from './context/reducer';
import Context from './context/store';
import GlobalStyle from './styles/GlobalStyle';
import Catch from './views/Catch';
import Home from './views/Home';
import Reward from './views/Reward';
import Rules from './views/Rules';
import Social from './views/Social';
import Story from './views/Story';
import Trainers from './views/Trainers';
import World from './views/World';

const Main = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  > section {
    max-width: 100vw;
  }
`;

function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <GlobalStyle />
      <Main>
        <Navbar />
        <section>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/world" component={World} />
            <Route path="/rewards" component={Reward} />
            <Route path="/catch/:slug?" component={Catch} />
            <Route path="/trainers" component={Trainers} />
            <Route path="/story" component={Story} />
            <Route path="/social" component={Social} />
            <Route path="/rules" component={Rules} />
          </Switch>
        </section>
      </Main>
    </Context.Provider>
  );
}

export default App;
