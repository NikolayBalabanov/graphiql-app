import React from 'react';
import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';

function Request({
  height,
  setRequest,
}: {
  height: string;
  setRequest?: React.Dispatch<React.SetStateAction<string>>;
}) {
  const onChange = React.useCallback(
    (value: string) => {
      setRequest!(value);
    },
    [setRequest]
  );
  return (
    <div className="flex flex-grow">
      <CodeMirror height={height} extensions={[javascript({ jsx: true })]} onChange={onChange} />
    </div>
  );
}

export { Request };
