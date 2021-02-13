import React from 'react';
import styled from 'styled-components';
import { rarities } from '../styles/theme';

const Container = styled.article`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: 1.5rem;

  &:after {
    content: '';
    width: 1rem;
    height: 1rem;
    display: inline-block;

    background: ${({ rarity }) => rarities[rarity]};
    margin-left: 1rem;

    transform: rotate(45deg);
  }
`;

const Rarity = ({ rarity, children }) => {
  return (
    <Container rarity={rarity}>
      <span>{children}</span>
    </Container>
  );
};

export default Rarity;
