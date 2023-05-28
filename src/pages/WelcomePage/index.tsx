import React from 'react';
import { AboutCourse } from './AboutCourse';
import { AboutUs } from './AboutUs';

function WelcomePage() {
  return (
    <div className="container mx-auto max-w-4/5 pt-5 flex flex-col items-center">
      {/* <h2 className="font-bold text-3xl mb-3">WelcomePage page</h2>
      <img
        className="rounded"
        src="https://media.tenor.com/-cSWvXO8UUAAAAAC/leonardo-dicaprio-leo.gif"
        alt="leo gif"
      /> */}
      <AboutCourse />
      <AboutUs />
    </div>
  );
}

export default WelcomePage;
