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
  z-index: 1;
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
  height: 51%;

  cursor: pointer;

  color: transparent;
`;

const ImageContainer = styled.div`
  position: relative;

  img {
    display: block;
    height: 100vh;
    width: auto;

    @media only screen and (min-width: ${breakpoints.tablet}) {
      min-height: 0;
      width: 100%;
      height: auto;
    }
  }
`;

const Shadow = styled.div`
  &:before {
    display: block;
    content: '';
    position: absolute;

    box-shadow: inset 0px 0px 1.5em 1.5em ${theme.mainBg};

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
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

  return (
    <Container ref={container}>
      <ImageContainer>
        <Shadow>
          <img
            ref={image}
            src="/images/map.jpg"
            alt="Mappa"
            onLoad={() => setLoaded(true)}
          />
        </Shadow>

        <Links>
          <Mon href="/trainers">Trainers</Mon>
          <Village href="/world">Ennara</Village>
        </Links>
      </ImageContainer>
    </Container>
  );
}

export default Map;
