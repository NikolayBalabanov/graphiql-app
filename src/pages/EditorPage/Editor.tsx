import React, { FC, useEffect } from 'react';
import { Headers } from './Headers';
import { Variables } from './Variables';

const req = { query: 'query {characters {    results {   name id     }  }}' };
type TQuery = { query: string };

interface IEditor {
  getQueryData: (req: TQuery) => void;
}

export const Editor: FC<IEditor> = ({ getQueryData }) => {
  useEffect(() => {
    getQueryData(req);
  }, [getQueryData]);
  return (
    <form className="bg-BGcolor w-1/2 rounded-2xl h-full p-2 flex flex-col justify-between">
      <textarea
        name="editor"
        id="editor"
        cols={30}
        rows={10}
        className="bg-BGcolor w-4/5 m-6 "
      ></textarea>
      <div className="flex justify-evenly my-4">
        <Headers />
        <Variables />
      </div>
    </form>
  );
};
