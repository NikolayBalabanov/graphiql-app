import React from 'react';
import { IEditor } from './Editor';
interface IBtn extends IEditor {
  request: string;
}

export const Button = ({ getQueryData, request }: IBtn) => {
  return (
    <button
      onClick={() => getQueryData({ query: request })}
      type="button"
      className="bg-btnBGHover rounded w-[2em] h-[2em] flex justify-center items-center cursor-pointer"
    >
      <svg height="1em" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>play icon</title>
        <path
          d="M1.32226e-07 1.6609C7.22332e-08 0.907329 0.801887 0.424528 1.46789 0.777117L15.3306 8.11621C16.0401 8.49182 16.0401 9.50818 15.3306 9.88379L1.46789 17.2229C0.801886 17.5755 1.36076e-06 17.0927 1.30077e-06 16.3391L1.32226e-07 1.6609Z"
          fill="white"
        ></path>
      </svg>
    </button>
  );
};
