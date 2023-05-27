import React, { FC } from 'react';
import { TArgs } from '../../models/schema';

interface IArgs {
  args: TArgs[];
  title?: string;
}

export const Args: FC<IArgs> = ({ args, title = 'Args' }) => {
  return (
    <>
      <h3>
        <b>{title}:</b>
      </h3>
      <ul className="pl-2 flex flex-col gap-2">
        {args.map((arg) => (
          <li key={arg.name} className="flex flex-col">
            <span>Name: {arg.name}</span>
            {arg.description && <span>Description: {arg.description}</span>}
            {arg.defaultValue && <span>DefaultValue: {arg.defaultValue}</span>}
            <span>Type: {JSON.stringify(arg.type, null, ' ')}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
