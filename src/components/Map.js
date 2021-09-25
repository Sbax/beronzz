import React from 'react';
import styled from 'styled-components';
import { Link } from 'wouter';

const Container = styled.div`
  overflow: auto;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;

  z-index: 0;

  background: #cabbaa;
`;

const Links = styled.div`
  z-index: 1;
  width: 1920px;
  height: 1080px;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const Mon = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 600px;
  height: 500px;

  cursor: pointer;

  color: transparent;
`;

const Village = styled(Link)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 650px;
  height: 550px;

  cursor: pointer;

  color: transparent;
`;

const Shadow = styled.div`
  z-index: 1;
  width: 1920px;
  height: 1080px;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  > img {
    display: block;
  }

  &:before {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 0px 1.5em 1.5em #cabbaa;
  }
`;

function Map() {
  return (
    <Container>
      <Links>
        <Mon href="/trainers">Trainers</Mon>
        <Village href="/world">Ennara</Village>
      </Links>
      <Shadow>
        <img src="/images/map.jpg" alt="Mappa" />
      </Shadow>
    </Container>
  );
}

export default Map;
