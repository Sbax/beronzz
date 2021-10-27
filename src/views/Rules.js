import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../styles/theme';

const Container = styled.main`
  max-width: ${breakpoints.desktop};
  margin: auto;

  padding: 1rem 0;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    padding: 1rem;
  }

  > * + * {
    margin-top: 2em;
  }
`;

const Story = () => {
  const [size, setSize] = useState();
  const container = useRef();

  useLayoutEffect(() => {
    const { width } = container.current.getBoundingClientRect();
    const height = (width * 9) / 16;

    setSize({ width, height });
  }, [container]);

  return (
    <Container ref={container}>
      {size && (
        <>
          <iframe
            width={size.width}
            height={size.height}
            src="https://www.youtube.com/embed/EdqOIziymg0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </>
      )}
    </Container>
  );
};

export default Story;
