import React, { FC } from 'react';
import { TType } from '../../../../models/schema';
import { Args } from '../../Args';
import { Fields } from './Fields';
import { Enums } from './Enums';

interface ITypesItem {
  type: TType;
}

export const TypesItem: FC<ITypesItem> = ({ type }) => {
  return (
    <li className="flex flex-col gap-2">
      <h2>
        <b>Type: </b>
        {type.name}
      </h2>
      <p>
        <b>Kind: </b>
        {type.kind}
      </p>
      {type.description.length > 0 && (
        <p>
          <b>Description: </b> {type.description}
        </p>
      )}
      {type.fields && <Fields fields={type.fields} />}
      {type.inputFields && <Args args={type.inputFields} title="InputFields" />}
      {type.enumValues && <Enums enumValues={type.enumValues} />}
    </li>
  );
};
