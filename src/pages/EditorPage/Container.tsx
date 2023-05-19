import React from 'react'
import { Editor } from './Editor'
import { Response } from './Response'

export const Container = () => {
  return (
    <div className='ml-8 p-2 grow bg-BGcolor2 rounded-2xl flex'>
        <Editor />
        <Response />
    </div>
  )
}
