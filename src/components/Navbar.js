/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'wouter';
import { breakpoints, theme } from '../styles/theme';

const Nav = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;

  padding: 2rem 1rem;
  font-size: 1.25rem;

  max-width: ${breakpoints.desktop};
  width: 100%;
  margin: auto;
`;

const Links = styled.section`
  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  align-items: center;

  > * + * {
    margin-left: 1rem;
  }

  a {
    color: ${theme.secondary};
  }
`;

const RightLinks = styled(Links)`
  justify-content: flex-end;
`;

const Navbar = () => {
  return (
    <Nav>
      <Links>
        <Link href="/">Home</Link>
        <Link href="/rewards">Tesori</Link>
      </Links>

      <RightLinks>
        <Link href="/world">Ennara</Link>
      </RightLinks>
    </Nav>
  );
};

export default Navbar;
