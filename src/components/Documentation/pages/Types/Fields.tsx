import React, { FC } from 'react';
import { TTypeField } from '../../../../models/schema';
import { Args } from '../../Args';

interface IFields {
  fields: TTypeField[];
}

export const Fields: FC<IFields> = ({ fields }) => {
  return (
    <>
      <p>
        <b>Fields: </b>
      </p>
      <ul className="pl-2 flex flex-col gap-2 list-disc ">
        {fields.map((field) => (
          <li key={field.name} className="flex flex-col">
            <hr />
            <span>
              <span className="font-medium">Name:</span> {field.name}
            </span>
            {field.description && (
              <span>
                <span className="font-medium">Description:</span> {field.description}
              </span>
            )}
            {field.args.length > 0 && <Args args={field.args} secondary />}
            <span>
              <span className="font-medium">Type:</span> {JSON.stringify(field.type, null, ' ')}
            </span>
            <span>
              <span className="font-medium">isDeprecated:</span>{' '}
              {field.isDeprecated ? 'true' : 'false'}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
