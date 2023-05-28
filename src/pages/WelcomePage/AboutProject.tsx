import React from 'react';
const data = ['Welcome page', 'User auth', 'GraphiQL page']

export const AboutProject = () => {
  return (
    <div className='flex  flex-col  items-center text-lg text-center'>
        <h1 className='font-bold text-3xl my-5'>Application is a playground for graphQL requests to rickandmortyapi</h1>
        <h5 className='font-semibold text-2xl mb-3'>App contains:</h5>
        <ul>
            {data.map(el => <li>{el}</li>)}
        </ul>
    </div>
  )
}
