import React from 'react';
import { TranslationProvider, Translation } from 'i18nano';
import { translations } from '../../translations';

export const AboutCourse = () => {
  return (
    <TranslationProvider translations={translations.about}>
      <div className="flex  flex-col  items-center text-xl text-center">
        <h1 className="text-3xl mb-5 font-bold">
          <Translation path="headerCourse" />
        </h1>
        <p className="my-1">
          <Translation path="course1" />
        </p>
        <p className="my-1">
          <Translation path="course2" />
        </p>
        <h5 className="text-2xl mb-4 mt-6 font-semibold">
          <Translation path="headerPrinciples" />
        </h5>
        <p className="my-1">
          <Translation path="textPrinciples" />
        </p>
        <h5 className="text-2xl mb-4 mt-6 font-semibold">
          <Translation path="coursesHeader" />
        </h5>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Angular</li>
          <li>Node.JS</li>
          <li>AWS FUNDAMENTALS</li>
          <li>AWS CLOUD DEVELOPER</li>
        </ul>
      </div>
    </TranslationProvider>
  );
};
