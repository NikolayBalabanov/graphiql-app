import React from 'react';
import loaderImg from '../../assets/pngegg.png';

function Loader() {
  return (
    <div className="mt-20 p-4 flex items-center justify-center">
      <img className="w-20 h-20 animate-bounce" src={loaderImg} alt="Loading..." />
    </div>
  );
}

export default Loader;
