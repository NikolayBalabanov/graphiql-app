import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface INeverPage {
  text?: string;
}

export const NeverPage: FC<INeverPage> = ({ text }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className="container mx-auto  md:p-10 p-3 ">
      <div className="relative overflow-hidden rounded-2xl flex items-center justify-center self-start">
        <img
          className="w-full object-cover opacity-50"
          src="https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-HD-Image.png"
          alt={text ? text : "404 — page doesn't exist"}
        />
        <div className="absolute flex items-center justify-center flex-col">
          <h2 className="mb-3 font-bold sm:ext-5xl text-3xl text-center text-orange-500">
            {text ? text : "404 — page doesn't exist"}
          </h2>
          <button
            type="button"
            className="border border-blue-500 rounded-sm h-fit bg-slate-200 px-5 py-2 hover:bg-blue-500 transition-colors"
            onClick={handleClick}
          >
            Back to Editor Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeverPage;
