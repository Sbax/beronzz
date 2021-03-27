import React, { useContext, useReducer } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'wouter';
import reducer from './context/reducer';
import Context from './context/store';
import GlobalStyle from './styles/GlobalStyle';
import Home from './views/Home';

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
        <section>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </section>
      </Main>
    </Context.Provider>
  );
}

export default App;
