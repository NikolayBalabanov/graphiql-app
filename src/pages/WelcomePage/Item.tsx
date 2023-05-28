import React from 'react';
import { TranslationProvider, Translation } from 'i18nano';
import { translations } from '../../translations';

interface ItemProps {
  name: string;
  img: string;
  pos?: string;
}

export const Item = ({ name, img, pos }: ItemProps) => {
  return (
    <TranslationProvider translations={translations.about}>
      <div className="flex flex-col items-center">
        <img src={img} alt="img" className="h-32 w-32 bg-slate-200 rounded-full" />
        <div className="my-4 text-lg text-center">
          <h5 className="font-bold">
            <Translation path={name} />
          </h5>
          <p className="font-semibold">
            <Translation path="dev" />
          </p>
          <p className="font-semibold">{pos && <Translation path={pos} />}</p>
        </div>
      </div>
    </TranslationProvider>
  );
};
