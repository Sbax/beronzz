import React from 'react';
import styled from 'styled-components';
import amumuIllustration from '../assets/svg/rewards/amumu.svg';
import creatureIllustration from '../assets/svg/rewards/creature.svg';
import houseIllustration from '../assets/svg/rewards/house.svg';
import pizzicoinsIllustration from '../assets/svg/rewards/pizzicoins.svg';
import trolleyIllustration from '../assets/svg/rewards/trolley.svg';
import { kFormatter } from '../data/utils';
import { theme } from '../styles/theme';

const Container = styled.article``;

const Image = styled.img`
  width: 4rem;
  height: 4rem;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > * + * {
    margin-top: 1rem;
  }
`;

const Name = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;

  > span {
    background: ${theme.accent};
    color: ${theme.mainBg};
    padding: 0.25rem 0.75rem;

    margin-right: 0.5rem;
    border-radius: 1rem;
  }
`;

const Title = styled.div`
  font-size: 1.2rem;
`;

const Score = styled.div`
  font-size: 2rem;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > * + * {
      margin-top: 1rem;
    }
  }

  img {
    width: 4rem;
    height: 4rem;
  }
`;

const Player = ({ number, name, housing, items, creatures, gold, amumu }) => {
  return (
    <Container>
      <Name>
        <span>{number}</span>
        {name}
      </Name>

      <Row>
        <Item>
          <Title>Abitazioni</Title>
          <Image src={houseIllustration} alt="house" />
          <Score>{kFormatter(housing)}</Score>
        </Item>

        <Item>
          <Title>Oggetti Avatar</Title>
          <Image src={trolleyIllustration} alt="trolley" />
          <Score>{kFormatter(items)}</Score>
        </Item>

        <Item>
          <Title>Creature Magiche</Title>
          <Image src={creatureIllustration} alt="creature" />
          <Score>{kFormatter(creatures)}</Score>
        </Item>

        <Item>
          <Title>Pizzicoins</Title>
          <Image src={pizzicoinsIllustration} alt="pizzicoins" />
          <Score>{kFormatter(gold)}</Score>
        </Item>

        <Item>
          <Title>Amumu</Title>
          <Image src={amumuIllustration} alt="amumu" />
          <Score>{kFormatter(amumu)}</Score>
        </Item>
      </Row>
    </Container>
  );
};

export default Player;
