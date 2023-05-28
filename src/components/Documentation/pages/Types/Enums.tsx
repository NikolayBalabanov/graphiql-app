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
      <div className="pl-2 flex flex-col gap-2">
        <span>
          <span className="font-medium">Name:</span> {enumValues.name}
        </span>
        {enumValues.description && (
          <span>
            <span className="font-medium">Description:</span> {enumValues.description}
          </span>
        )}
        <span>
          <span className="font-medium">isDeprecated:</span>{' '}
          {enumValues.isDeprecated ? 'true' : 'false'}
        </span>
      </div>
    </>
  ) : (
    <></>
  );
};
