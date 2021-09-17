import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Loader from '../components/mons/Loader';
import Team from '../components/mons/Team';
import Input from '../components/retro/Input';
import Context from '../context/store';
import useMons from '../context/useMons';
import { breakpoints, theme } from '../styles/theme';

const Container = styled.main`
  max-width: ${breakpoints.desktop};
  margin: auto;

  padding: 1rem 0;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    padding: 1rem;
  }

  font-family: 'VT323';
`;

const Title = styled.h1`
  font-size: 2.4rem;

  > span {
    background: ${theme.accent};
    color: white;
    padding: 0 0.35rem;
  }
`;

const Trainer = styled.div`
  line-height: 1.4;

  & + & {
    margin-top: 1rem;
  }
`;

const Trainers = () => {
  const { state } = useContext(Context);
  const { initializedMons, loading } = state;

  useMons();

  const [search, setSearch] = useState('');

  const triggerSearch = ({ value }) => setSearch(value);

  return (
    <Container>
      {(() => {
        if (!initializedMons || loading) return <Loader />;
        const { trainers } = state;

        return (
          <>
            <Input
              onInput={(event) => {
                triggerSearch(event.target);
              }}
              type="text"
              placeholder="Ricerca..."
            />
            {trainers
              .filter(({ name }) =>
                name.toLowerCase().includes(search.toLowerCase())
              )
              .map(({ slug, number, name, team }) => (
                <Trainer key={slug}>
                  <Title>
                    <span>{number.padStart(3, '0')}</span> {name}
                  </Title>
                  <Team team={team} />
                </Trainer>
              ))}
          </>
        );
      })()}
    </Container>
  );
};

export default Trainers;
