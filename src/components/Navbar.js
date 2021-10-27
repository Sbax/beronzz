/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'wouter';
import { breakpoints, theme } from '../styles/theme';

const Nav = styled.nav`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  grid-gap: 1em;

  padding: 2rem 1rem;
  font-size: 1.25rem;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    font-size: 2rem;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
  }

  max-width: ${breakpoints.desktop};
  width: 100%;
  margin: auto;
  z-index: 1;
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
    color: ${theme.mainBg};
    text-decoration: none;
    background: ${theme.accent};
    padding: 0.15em 0.25em;
    border-radius: 0.5em;
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
        <Link href="/catch">Catch!</Link>
      </Links>

      <RightLinks>
        <Link href="/world">Ennara</Link>
        <Link href="/trainers">Allenatori</Link>
        <Link href="/story">Storia</Link>
        <Link href="/rules">Spiegazione Sito</Link>
        <Link href="/social">Social</Link>
      </RightLinks>
    </Nav>
  );
};

export default Navbar;
