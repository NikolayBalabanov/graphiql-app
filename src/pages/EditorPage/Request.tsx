import React from 'react';
import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';

function Request({
  height,
  setRequestField,
  content,
}: {
  height: string;
  content?: string;
  setRequestField: React.Dispatch<React.SetStateAction<string>>;
}) {
  const onChange = React.useCallback(
    (value: string) => {
      setRequestField(value);
    },
    [setRequestField]
  );
  return (
    <div className="flex flex-grow">
      <CodeMirror
        value={content}
        height={height}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </div>
  );
}

export { Request };
