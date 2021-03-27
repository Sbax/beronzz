import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/svg/logo.svg';
import Chart from '../components/Chart';
import DefaultContainer from '../components/Container';
import Flying from '../components/Flying';
import Illustration from '../components/Illustration';
import { breakpoints } from '../styles/theme';

const Container = styled(DefaultContainer)`
  display: flex;
  flex-direction: column;

  align-items: center;

  > *:first-child {
    margin-top: 10rem;

    @media only screen and (max-width: ${breakpoints.tablet}) {
      margin-top: 1rem;
    }
  }

  img {
    margin-bottom: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;

  text-align: center;
`;

const words = [
  '!barbabbuzzo',
  '!buldrizzo',
  '!finnico',
  '!mammelloni',
  '!mamajones',
  '!barrylemonz',
  '!pizzicoin',
  '!ennara',
  '!orari',
  '!beronzz',
  '!beronz',
  '!trollatodiberonz',
];

const Home = () => {
  const [word, setWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setWord(word + 1), 7.5 * 1e3);
    return () => clearInterval(interval);
  }, [word]);

  return (
    <Container>
      <img src={logo} alt="Beronz" />

      <Subtitle>
        Live su <a href="https://www.twitch.tv/beronzz">Twitch</a> dalle 11 alle
        19 + sorprese <i>quasi</i> sempre preannunciate
      </Subtitle>

      <Subtitle>Benvenuti ad Hotwartz!</Subtitle>
      <Chart />

      <Flying>{words[word]}</Flying>
      <Illustration />
    </Container>
  );
};

export default Home;
