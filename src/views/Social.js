import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faTwitch,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/svg/logo.svg';
import DefaultContainer from '../components/Container';
import Flying from '../components/Flying';
import Illustration from '../components/Illustration';
import { breakpoints } from '../styles/theme';

import { instagram, twitch, youtube, orari } from '../forestry/social.json';

library.add([faInstagram, faYoutube, faTwitch]);

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

const Section = styled.section`
  > * + * {
    margin-left: 2em;
  }
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

const Social = () => {
  const [word, setWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setWord(word + 1), 7.5 * 1e3);
    return () => clearInterval(interval);
  }, [word]);

  return (
    <Container>
      <img src={logo} alt="Beronz" />

      <Subtitle>
        Live su <a href={twitch}>Twitch</a> {orari} + sorprese <i>quasi</i>{' '}
        sempre preannunciate
      </Subtitle>

      <Section>
        <a href={twitch}>
          <FontAwesomeIcon size="3x" icon={['fab', 'twitch']} />
        </a>
        <a href={youtube}>
          <FontAwesomeIcon size="3x" icon={['fab', 'youtube']} />
        </a>
        <a href={instagram}>
          <FontAwesomeIcon size="3x" icon={['fab', 'instagram']} />
        </a>
      </Section>

      <Flying>{words[word]}</Flying>
      <Illustration />
    </Container>
  );
};

export default Social;
