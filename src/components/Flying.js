import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 2rem;

  pointer-events: none;

  opacity: 0.5;

  animation: fly 50s linear infinite;
  pointer-events: none !important;
  top: 0;
  left: 0;
  transform: translateX(-120%) translateY(-120%) rotateZ(0);
  position: fixed;
  z-index: 999999;

  @keyframes fly {
    98.001%,
    0% {
      display: block;
      transform: translateX(-200%) translateY(100vh) rotateZ(0deg);
    }

    15% {
      transform: translateX(100vw) translateY(-100%) rotateZ(180deg);
    }

    15.001%,
    18% {
      transform: translateX(100vw) translateY(-30%) rotateZ(0deg);
    }

    30% {
      transform: translateX(-200%) translateY(3vh) rotateZ(-180deg);
    }

    30.001%,
    33% {
      transform: translateX(-200%) translateY(-100%) rotateZ(-180deg);
    }

    45% {
      transform: translateX(100vw) translateY(50vh) rotateZ(0deg);
    }

    45.001%,
    48% {
      transform: translateX(20vw) translateY(-200%) rotateZ(180deg);
    }

    60% {
      transform: translateX(10vw) translateY(100vh) rotateZ(0deg);
    }

    60.001%,
    63% {
      display: block;
      transform: translateX(-200%) translateY(100vh) rotateZ(0deg);
    }

    75% {
      transform: translateX(100vw) translateY(-100%) rotateZ(180deg);
    }

    75.001%,
    78% {
      transform: translateX(100vw) translateY(-30%) rotateZ(0deg);
    }

    98% {
      transform: translateX(-200%) translateY(3vh) rotateZ(-180deg);
    }
  }
`;

const Flying = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Flying;
