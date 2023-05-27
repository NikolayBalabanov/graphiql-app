import React, { FC } from 'react';
import { TEnumsValues } from '../../../../models/schema';

interface IEnums {
  enumValues: TEnumsValues;
}

export const Enums: FC<IEnums> = ({ enumValues }) => {
  return enumValues ? (
    <>
      <h3>
        <b>EnumValues:</b>
      </h3>
      <div>
        <span>Name: {enumValues.name}</span>
        {enumValues.description && <span>Description: {enumValues.description}</span>}
        <span>isDeprecated: {enumValues.isDeprecated ? 'true' : 'false'}</span>
      </div>
    </>
  ) : (
    <></>
  );
};
