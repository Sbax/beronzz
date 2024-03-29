import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { catchMon } from '../../data/mon';
import Balloon from '../retro/Balloon';
import great from '../../sprites/great.png';
import master from '../../sprites/master.png';
import poke from '../../sprites/poke.png';
import ultra from '../../sprites/ultra.png';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Balls = styled.section`
  min-height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    height: 2.5rem;
    width: 2.5rem;

    cursor: pointer;
  }

  > * + * {
    margin-left: 1rem;
  }
`;

const CatchBox = ({ name, catchRate }) => {
  const [attempting, setAttempting] = useState(false);
  const [caught, setCaught] = useState();

  useEffect(() => {
    setAttempting();
    setCaught();
  }, [name]);

  const tryCatch = (ballModifier) => {
    setTimeout(() => {
      setCaught(catchMon(ballModifier, catchRate));
      setAttempting(false);
    }, 2000);

    setAttempting(true);
    setCaught(null);
  };

  return (
    <Container>
      <Balloon>
        {(() => {
          if (attempting) return '...';
          if (caught === false) return 'Oh no è uscito!';
          if (caught) return 'Preso!';

          return `Appare ${name} selvatico!`;
        })()}
      </Balloon>

      <Balls>
        {!caught && !attempting && (
          <>
            <img onClick={() => tryCatch(1)} src={poke} alt="PokeBall" />
            <img onClick={() => tryCatch(1.5)} src={great} alt="GreatBall" />
            <img onClick={() => tryCatch(2)} src={ultra} alt="UltraBall" />
            <img onClick={() => tryCatch(0)} src={master} alt="MasterBall" />
          </>
        )}
      </Balls>
    </Container>
  );
};

export default CatchBox;
