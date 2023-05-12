import React from 'react';
import { TranslationProvider, Translation } from 'i18nano';
import { translations } from '../../translations';


interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  onClick?(): void;
}

export const Button = ({ type, text, onClick }: ButtonProps) => {
  return (
    <TranslationProvider translations={translations.signIn}>
    <button
      type={type}
      className="h-12 m-w-20 px-1 mx-2 bg-btnBG rounded-md self-center font-bold"
      onClick={onClick}
    >
      <Translation path={text}/>
    </button>
    </TranslationProvider>
  );
};
