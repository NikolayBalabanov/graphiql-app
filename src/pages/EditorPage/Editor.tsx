import React, { FC, useState } from 'react';
import { Request } from './Request';
import { Button } from './Button';
import { Headers } from './Headers';
import { Variables } from './Variables';

type TQuery = { query: string };

export interface IEditor {
  getQueryData: (req: TQuery) => void;
}

export const Editor: FC<IEditor> = ({ getQueryData }) => {
  const [query, setQuery] = useState('');
  const [headers, setHeaders] = useState('');
  const [variables, setVariables] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [field, setField] = useState<'variables' | 'headers' | null>(null);
  const handleOpenField = (targetField: 'variables' | 'headers') => {
    if (field === targetField) {
      setIsActive(!isActive);
    } else {
      setIsActive(true);
    }
    setField(targetField);
  };
  const handleRequest = () => {
    const reqBody = {
      query: query,
      headers: headers,
      variables: JSON.parse(variables || '{}'),
    };
    getQueryData(reqBody);
  };
  return (
    <form className="bg-BGColorWhite w-1/2 rounded-2xl p-2 flex flex-col">
      <div className="flex my-1">
        <div className="w-full flex flex-grow">
          <Request height="65vh" setRequestField={setQuery} />
        </div>
        <Button callBack={handleRequest} />
      </div>
      <div className={isActive ? 'flex flex-row justify-evenly' : 'flex flex-row justify-evenly'}>
        <Variables
          isActive={field === 'variables'}
          setIsActive={() => handleOpenField('variables')}
        />
        <Headers isActive={field === 'headers'} setIsActive={() => handleOpenField('headers')} />
      </div>
      <div className={isActive ? 'flex' : 'hidden'}>
        <Request
          height="20vh"
          content={field === 'variables' ? variables : headers}
          setRequestField={field === 'variables' ? setVariables : setHeaders}
        />
      </div>
    </form>
  );
};
