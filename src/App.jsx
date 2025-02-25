import React, { useState } from 'react';
import Background from './components/Background';
import Nav from './components/Nav';
import Hero from './components/Hero';

const App = () => {
  const arr = [
    { first: "Dive into", second: "what you love" },
    { first: "Indulge", second: "your passions" },
    { first: "Give in to", second: "your passions" }
  ];

  const [herocount, setherocount] = useState(0);
  const [play, setplay] = useState(false);

  return (
    <>
      <Nav />
      <Hero
        key={herocount} 
        arr={arr[herocount]}
        setplay={setplay}
        play={play}
        herocount={herocount} 
        setherocount={setherocount}
      />
      <Background
        herocount={herocount}
        play={play}
      />
    </>
  );
};

export default App;