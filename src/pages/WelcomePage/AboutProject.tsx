import React from 'react';
import { TranslationProvider, Translation } from 'i18nano';
import { translations } from '../../translations';

const data = ['welcome', 'userAuth', 'graphiQL'];

export const AboutProject = () => {
  return (
    <TranslationProvider translations={translations.about}>
      <div className="flex  flex-col  items-center text-lg text-center">
        <h1 className="font-bold text-3xl my-5">
          <Translation path="headerProject" />
        </h1>
        <h5 className="font-semibold text-2xl mb-3">
          <Translation path="textProject" />
        </h5>
        <ul>
          {data.map((el) => (
            <li key={el}>
              <Translation path={el} />
            </li>
          ))}
        </ul>
      </div>
    </TranslationProvider>
  );
};
