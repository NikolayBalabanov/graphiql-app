import React from 'react';
import { AboutCourse } from './AboutCourse';
import { AboutUs } from './AboutUs';
import { AboutProject } from './AboutProject';

function WelcomePage() {
  return (
    <div className="container mx-auto max-w-4/5 pt-5 flex flex-col items-center">
      <AboutCourse />
      <AboutUs />
      <AboutProject />
    </div>
  );
}

export default WelcomePage;
