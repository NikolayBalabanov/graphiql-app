import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  onClick?(): void;
}

export const Button = ({ type, text, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className="h-12 w-20 bg-btnBG rounded-md self-center font-bold"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
