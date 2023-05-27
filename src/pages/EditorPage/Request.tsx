import React from 'react';
import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';

function Request({height} : {height: string}) {
    const onChange = React.useCallback((value: any, viewUpdate: any) => {
    console.log('value:', value);
  }, []);
  return (
    <div className='flex flex-grow'>
    <CodeMirror
      height={height}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />

    </div>
  );
}

export { Request };