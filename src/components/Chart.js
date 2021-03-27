import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../context/store';
import useHotwartz from '../context/useHotwartz';
import { theme } from '../styles/theme';

const List = styled.ul`
  font-size: 1.5rem;
  margin-bottom: 6rem;

  > * + * {
    margin-top: 1rem;
  }
`;

const Item = styled.li`
  span + span {
    margin-left: 0.5rem;
  }
`;

const House = styled.span`
  background-color: ${({ color }) => color};
  color: ${theme.mainBg};

  padding: 0 0.25rem;
  border-radius: 0.25rem;
`;

function Chart() {
  useHotwartz();

  const { state } = useContext(Context);
  const { initializedHotwartz, loading } = state;
  const { chart } = state;
  if (!initializedHotwartz || loading) return '';

  return (
    <List>
      {chart
        .sort((a, b) => b.points - a.points)
        .map(({ house, points, color }) => (
          <Item key={house}>
            <House color={color}>{house}</House>
            <span>{points} punti</span>
          </Item>
        ))}
    </List>
  );
}

export default Chart;
