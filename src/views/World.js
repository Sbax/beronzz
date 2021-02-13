import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Player from '../components/Player';
import Context from '../context/store';
import useEnnara from '../context/useEnnara';
import { fontFamily, theme } from '../styles/theme';

const Players = styled.section`
  > * + * {
    margin-top: 2rem;
  }
`;

const Input = styled.input`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  border: 0.2rem solid ${theme.offBlack};
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;

  outline: none;
  font-family: ${fontFamily.body};
`;

const World = () => {
  useEnnara();

  const { state } = useContext(Context);
  const { initializedEnnara, loading } = state;
  const { players } = state;

  const [search, setSearch] = useState('');
  const triggerSearch = ({ value }) => setSearch(value);

  if (!initializedEnnara || loading) return 'Loading...';

  return (
    <Container>
      <Input
        onInput={(event) => {
          triggerSearch(event.target);
        }}
        type="text"
        placeholder="Ricerca..."
      />

      <Players>
        {players
          .filter(({ name }) =>
            name.toLowerCase().includes(search.toLowerCase())
          )
          .map(({ slug, ...player }) => (
            <Player {...player} key={slug} />
          ))}
      </Players>
    </Container>
  );
};

export default World;
