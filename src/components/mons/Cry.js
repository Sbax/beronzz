import React, { useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
`;

const Cry = ({ file }) => {
  const audio = useRef(null);
  const play = () => audio.current.play();

  return (
    <Container>
      <audio ref={audio} src={file} />
      <div onClick={play}>Grido</div>
    </Container>
  );
};

export default Cry;
