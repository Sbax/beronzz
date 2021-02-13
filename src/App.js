import React, { useContext, useReducer } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'wouter';
import Navbar from './components/Navbar';
import reducer from './context/reducer';
import Context from './context/store';
import GlobalStyle from './styles/GlobalStyle';
import Home from './views/Home';
import Players from './views/Players';
import Reward from './views/Reward';
import World from './views/World';

const Main = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
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
            <Route path="/players" component={Players} />
            <Route path="/rewards" component={Reward} />
          </Switch>
        </section>
      </Main>
    </Context.Provider>
  );
}

export default App;
