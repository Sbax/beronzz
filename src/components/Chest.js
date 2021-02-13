import Baffle from 'baffle-react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const states = {
  closed: 'closed',
  opening: 'opening',
  opened: 'opened',
};

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  cursor: pointer;
  > img {
    width: 5rem;
    height: auto;
  }
`;

const Reward = styled.div`
  font-size: 1.3rem;
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: ${({ opened }) => (opened ? '1' : '0.3')};
  transition: opacity 300ms ease-in-out;
`;

const Chest = ({ id, reward, rarity }) => {
  const [state, setState] = useState(states.closed);

  useEffect(() => {
    setState(states.closed);
  }, [id]);

  return (
    <Container>
      <Reward opened={state === states.opened}>
        <Baffle exclude={[]} obfuscate={state !== states.opened}>
          {reward.padEnd(30, ' ')}
        </Baffle>
      </Reward>
      <Icon
        onClick={() => setState(states.opened)}
        onMouseEnter={() => state !== states.opened && setState(states.opening)}
        onMouseLeave={() => state !== states.opened && setState(states.closed)}
        rarity={rarity}
      >
        <img src={`/images/chest/${rarity}/${state}.svg`} alt="chest" />
      </Icon>
    </Container>
  );
};

export default Chest;
