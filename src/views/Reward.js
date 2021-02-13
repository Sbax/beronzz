import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Chest from '../components/Chest';
import Container from '../components/Container';
import Illustration from '../components/Illustration';
import Rarity from '../components/Rarity';
import useEnnara from '../context/useEnnara';
import Context from '../context/store';
import { getChest } from '../data/ennara';
import { theme } from '../styles/theme';

const Chests = styled.section`
  display: flex;

  > * {
    flex: 1;
  }
`;

const Legend = styled.section`
  > * + * {
    margin-top: 0.66rem;
  }
`;

const Header = styled.section`
  display: flex;

  > * {
    flex: 1;
  }

  margin-bottom: 3rem;
`;

const Button = styled.button`
  color: ${theme.mainBg};
  background: ${theme.accent};
  font-size: 1.5rem;

  padding: 0.5rem 1rem;
  border-radius: 1rem;

  transition: 300ms ease-in-out opacity;

  &:hover {
    opacity: 0.8;
  }
`;

const Reward = () => {
  useEnnara();

  const { state } = useContext(Context);
  const { initializedEnnara, loading } = state;
  const { rewards } = state;

  const [chests, setChests] = useState();

  const getChests = () => {
    setChests([getChest(rewards), getChest(rewards), getChest(rewards)]);
  };

  return (
    <Container>
      {(() => {
        if (!initializedEnnara || loading) return <>Caricando...</>;

        return (
          <>
            <Header>
              <section>
                <Button onClick={getChests}>Apri un forziere!</Button>
              </section>
              <section></section>

              <Legend>
                <Rarity rarity={'legendary'}>Leggendario</Rarity>
                <Rarity rarity={'ultrarare'}>Ultra raro</Rarity>
                <Rarity rarity={'rare'}>Raro</Rarity>
                <Rarity rarity={'common'}>Comune</Rarity>
              </Legend>
            </Header>

            {(() => {
              if (chests)
                return (
                  <Chests>
                    {chests.map((chest) => (
                      <Chest key={chest.id} {...chest} />
                    ))}
                  </Chests>
                );
            })()}
          </>
        );
      })()}

      <Illustration />
    </Container>
  );
};

export default Reward;
