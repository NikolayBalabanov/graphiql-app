import React from 'react'
import { Editor } from './Editor'

export const Container = () => {
  return (
    <div className='ml-8 p-2 grow bg-BGcolor2 rounded-2xl'>
        <Editor />
        {/* <textarea name="editor" id="editor" cols={30} rows={10} className='bg-BGcolor'></textarea> */}
    </div>
  )
}
