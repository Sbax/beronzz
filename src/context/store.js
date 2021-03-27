import { createContext } from 'react';

const Context = createContext({
  initializedEnnara: false,
  initializedHodwartz: false,
  loading: false,
});

export default Context;
