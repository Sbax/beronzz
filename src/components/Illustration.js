import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Hills } from '../assets/svg/hills.svg';

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
`;

const Illustration = () => {
  return (
    <Container>
      <Hills />
    </Container>
  );
};

export default Illustration;
