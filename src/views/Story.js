import React from 'react';
import styled from 'styled-components';
import { story } from '../forestry/story.json';
import { breakpoints } from '../styles/theme';

const Container = styled.main`
  max-width: ${breakpoints.desktop};
  margin: auto;

  padding: 1rem 0;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    padding: 1rem;
  }
`;

const Body = styled.div`
  max-width: 100ch;
  p {
    font-size: 1.55em;
    line-height: 1.2;
    margin-bottom: 1em;
  }
`;

const Story = () => {
  return (
    <Container>
      <Body
        dangerouslySetInnerHTML={{
          __html: story,
        }}
      />
    </Container>
  );
};

export default Story;
