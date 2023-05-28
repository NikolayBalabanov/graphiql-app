import React from 'react'

export const AboutCourse = () => {
  return (
    <div className="flex  flex-col  items-center text-xl text-center">
        <h1 className='text-3xl mb-5 font-bold'>RS School is free-of-charge and community-based education program conducted by The Rolling Scopes developer community
since 2013.</h1>
    <p className='my-1'>
    Everyone can study at RS School, regardless of age, professional employment, or place of residence.
    </p>
    <p className='my-1'>The mentors and trainers of our school are front-end and javascript developers from different companies and countries.</p>
    <h5 className='text-2xl mb-4 mt-6 font-semibold'>RS School's principles</h5>
    <p className='my-1'>Open Source Philosophy and “Teach It Forward”</p>
    <h5 className='text-2xl mb-4 mt-6 font-semibold'>RS School's Courses</h5>
    <ul>
        <li>Javascript</li>
        <li>React</li>
        <li>Angular</li>
        <li>Node.JS</li>
        <li>AWS FUNDAMENTALS</li>
        <li>AWS CLOUD DEVELOPER</li>
    </ul>
    </div>
  )
}
