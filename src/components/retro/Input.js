import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Input = styled.input`
  font-family: 'VT323';
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  border: none;
  outline: none;
  box-shadow: 0 0.25rem ${theme.offBlack}, 0 -0.25rem ${theme.offBlack},
    0.25rem 0 ${theme.offBlack}, -0.25rem 0 ${theme.offBlack};
`;

export default Input;
