import React from 'react';
import errorImage from '../../../assets/giphy.gif';

export const ErrorPage = () => {
  return (
    <div className="relative flex items-center justify-center">
      <img className="w-full h-full object-cover" src={errorImage} alt="Docs error image" />
      <div className="absolute bottom-0 p-3 rounded-md text-center font-semibold text-red-700 bg-slate-300">
        Oops! Error while fetching documentation
      </div>
    </div>
  );
};
