import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'wouter';
import { breakpoints, theme } from '../styles/theme';

const Container = styled.div`
  overflow: auto;

  background: ${theme.mainBg};

  display: flex;
  align-items: center;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding: 2em;
  }
`;

const Links = styled.div`
  z-index: 2;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Mon = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 31%;
  height: 46%;

  cursor: pointer;

  color: transparent;
`;

const Village = styled(Link)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 34%;
  height: 53%;

  cursor: pointer;

  color: transparent;
`;

const ImageContainer = styled.div`
  position: relative;
  z-index: 1;

  img {
    grid-area: stacked;
    display: block;
    height: 100vh;
    width: auto;

    transition: opacity 200ms ease-in-out;

    &.hovered-main {
      opacity: 0.75;
    }

    &.hovered {
      opacity: 1;
    }

    &.hidden {
      opacity: 0;
    }

    @media only screen and (min-width: ${breakpoints.tablet}) {
      min-height: 0;
      width: 100%;
      height: auto;
    }
  }
`;

const Shadow = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-areas: 'stacked';
  &:before {
    display: block;
    content: '';
    position: absolute;

    box-shadow: inset 0px 0px 1.5em 1.5em ${theme.mainBg};

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
  }
`;

function Map() {
  const container = useRef(null);
  const image = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    const containerWidth = container.current.getBoundingClientRect().width;
    const imageWidth = image.current.getBoundingClientRect().width;
    container.current.scrollTo((imageWidth - containerWidth) / 2, 0);
  }, [loaded]);

  const [hovered, setHovered] = useState(false);

  return (
    <Container ref={container}>
      <ImageContainer>
        <Shadow>
          <img
            ref={image}
            src="/images/map.jpg"
            alt="Mappa"
            onLoad={() => setLoaded(true)}
            className={hovered ? 'hovered-main' : ''}
          />

          <img
            src="/images/ennara-only.png"
            alt="ennara"
            className={hovered === 'ennara' ? 'hovered' : 'hidden'}
          />
          <img
            src="/images/mons-only.png"
            alt="mons"
            className={hovered === 'mons' ? 'hovered' : 'hidden'}
          />
        </Shadow>

        <Links>
          <Mon
            href="/trainers"
            onMouseEnter={() => setHovered('mons')}
            onMouseLeave={() => setHovered(false)}
          >
            Trainers
          </Mon>
          <Village
            href="/world"
            onMouseEnter={() => setHovered('ennara')}
            onMouseLeave={() => setHovered(false)}
          >
            Ennara
          </Village>
        </Links>
      </ImageContainer>
    </Container>
  );
}

export default Map;
