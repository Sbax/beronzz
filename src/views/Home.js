import React, { useEffect, useState } from 'react';
import Map from '../components/Map';

const Home = () => {
  const [word, setWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setWord(word + 1), 7.5 * 1e3);
    return () => clearInterval(interval);
  }, [word]);

  return <Map />;
};

export default Home;
