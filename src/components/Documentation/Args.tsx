import React, { FC } from 'react';
import { TArgs } from '../../models/schema';

interface IArgs {
  args: TArgs[];
  title?: string;
  secondary?: boolean;
}

export const Args: FC<IArgs> = ({ args, title = 'Args', secondary }) => {
  return (
    <>
      <h3 className={`${secondary ? 'font-medium' : 'font-bold'}`}>{title}:</h3>
      <ul className="pl-2 flex flex-col gap-2">
        {args.map((arg) => (
          <li key={arg.name} className="flex flex-col">
            <span>
              <span className="font-medium">Name:</span> {arg.name}
            </span>
            {arg.description && (
              <span>
                <span className="font-medium">Description:</span> {arg.description}
              </span>
            )}
            {arg.defaultValue && (
              <span>
                <span className="font-medium">DefaultValue:</span> {arg.defaultValue}
              </span>
            )}
            <span>
              <span className="font-medium">Type:</span> {JSON.stringify(arg.type, null, ' ')}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
