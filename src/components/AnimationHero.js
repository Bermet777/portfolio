import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player'; 
import techAnimation from '../animations/animation.json'; 

const AnimationHero = () => {
  return (
    <div className="flex justify-center items-center">
      <Player
        autoplay
        loop
        src={techAnimation}
        style={{ height: '300px', width: '300px' }}
      />
    </div>
  );
};

export default AnimationHero;
