import React from 'react';
import styled from 'styled-components';
import missingno from '../../sprites/missingno.png';
import Type from './Type';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'VT323';

  > * + * {
    margin-top: 0.25rem;
  }
`;

const Sprite = styled.img`
  min-height: 6em;
  max-height: 6em;
  width: auto;
  height: auto;
`;

const Name = styled.span`
  font-size: 1.75em;
  line-height: 1em;
`;

const Types = styled.div`
  display: flex;

  > * + * {
    margin-left: 0.25em;
  }
`;

const Generation = styled.span`
  font-size: 1.25em;
  opacity: 0.5;
`;

const Mon = ({ mon }) => {
  const { sprite, generation, name, types } = mon;

  return (
    <Container>
      <Sprite src={sprite || missingno} />
      <Name>{name}</Name>

      <Types>
        {(types || []).map((type) => (
          <Type type={type} key={type} />
        ))}
      </Types>
      <Generation>Generazione {generation}</Generation>
    </Container>
  );
};

export default Mon;
