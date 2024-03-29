import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useRoute } from 'wouter';
import CatchBox from '../components/mons/CatchBox';
import Cry from '../components/mons/Cry';
import Filters from '../components/mons/Filters';
import Loader from '../components/mons/Loader';
import Mon from '../components/mons/Mon';
import Button from '../components/retro/Button';
import Context from '../context/store';
import useMons from '../context/useMons';
import { randomMon } from '../data/mon';
import pokedex from '../sprites/pokedex.png';
import { breakpoints } from '../styles/theme';

const key = 'beronzz-pokemon';
const settingsKey = `${key}:settings`;

const Container = styled.main`
  max-width: ${breakpoints.desktop};
  margin: auto;

  padding: 1rem 0;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    padding: 1rem;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Dex = styled.img`
  width: 2.5rem;
`;

const Info = styled.div`
  margin-top: 0.5rem;

  display: flex;
  align-items: center;

  > * + * {
    margin-left: 0.5rem;
  }
`;

const allTypes = [
  'rock',
  'ground',
  'fighting',
  'grass',
  'bug',
  'flying',
  'water',
  'ice',
  'poison',
  'dark',
  'ghost',
  'electric',
  'normal',
  'steel',
  'fire',
  'dragon',
  'psychic',
  'fairy',
];

const allGenerations = [1, 2, 3, 4, 5, 6, 7, 8];

const getSettings = () => {
  const settings = localStorage.getItem(settingsKey);
  if (!settings) return { generations: allGenerations, types: allTypes };

  return JSON.parse(settings);
};

const Catch = () => {
  useMons();

  const settings = getSettings();

  const { state } = useContext(Context);
  const { initializedMons, loading } = state;
  const { mons } = state;

  const [match, params] = useRoute('/catch/:slug?');

  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useLocation();
  const mon = match && mons && mons.find(({ slug }) => slug === params.slug);

  const [generations, setGenerations] = useState(settings.generations);
  const [types, setTypes] = useState(settings.types);

  useEffect(() => {
    localStorage.setItem(settingsKey, JSON.stringify({ generations, types }));
  }, [generations, types]);

  const getRandom = () => {
    const filtered = mons
      .filter(({ rarity }) => !!rarity)
      .filter(({ generation }) => generations.includes(generation))
      .filter(
        (item) => types.includes(item.types[0]) || types.includes(item.types[1])
      );

    setLocation(`/catch/${randomMon(filtered).slug}`);
  };

  return (
    <Container>
      {(() => {
        if (!initializedMons || loading) return <Loader />;

        return (
          <>
            <Button
              disabled={!types.length || !generations.length}
              onClick={getRandom}
            >
              Gotta Catch 'Em All!
            </Button>

            <Filters
              generationsInput={generations}
              typesInput={types}
              sendGenerations={(change) => setGenerations(change)}
              sendTypes={(change) => setTypes(change)}
            />

            {mon && (
              <>
                <CatchBox {...mon} />
                <Mon mon={mon} />

                <Info>
                  <a href={mon.dex} target="_blank" rel="noopener noreferrer">
                    <Dex src={pokedex} alt="Pokedex icon" />
                  </a>

                  {mon.cry && <Cry file={mon.cry} />}
                </Info>
              </>
            )}
          </>
        );
      })()}
    </Container>
  );
};

export default Catch;
