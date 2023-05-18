import React from 'react';
import { Headers } from './Headers';
import { Variables } from './Variables';

export const Editor = () => {
  return (
    <div className='bg-BGcolor w-1/2 rounded-2xl h-full p-2 flex flex-col justify-between'>
        <textarea name="editor" id="editor" cols={30} rows={10} className='bg-BGcolor w-4/5 m-6 '></textarea>
        <div className='flex justify-evenly my-4'>
        <Headers />
        <Variables />
        </div>
    </div>
  )
}
