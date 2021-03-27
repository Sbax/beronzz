import { createContext } from 'react';

const Context = createContext({
  initializedEnnara: false,
  initializedHotwartz: false,
  loading: false,
});

export default Context;
