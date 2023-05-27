import React, { FC, useEffect, useState } from 'react';
import { Request } from './Request';
import { Button } from './Button';
import { Headers } from './Headers';
import { Variables } from './Variables';

type TQuery = { query: string };

export interface IEditor {
  getQueryData: (req: TQuery) => void;
}

export const Editor: FC<IEditor> = ({ getQueryData }) => {
  const [request, setRequest] = useState('');
  useEffect(() => {
    getQueryData({ query: request });
  }, [getQueryData, request]);
  const [isActive, setIsActive] = useState(false);
  return (
    <form className="bg-BGColorWhite w-1/2 rounded-2xl p-2 flex flex-col">
      <div className="flex my-1">
        <div className="w-full flex flex-grow">
          <Request height="65vh" setRequest={setRequest} />
        </div>

        <Button request={request} getQueryData={getQueryData} />
      </div>
      <div className={isActive ? 'flex flex-row justify-evenly' : 'flex flex-row justify-evenly'}>
        <Headers isActive={isActive} setIsActive={setIsActive} />
        <Variables isActive={isActive} setIsActive={setIsActive} />
      </div>
      <div className={isActive ? 'flex' : 'hidden'}>
        <Request height="20vh" />
      </div>
    </form>
  );
};
