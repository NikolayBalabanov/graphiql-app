import React, { FC } from 'react';
import { TDirective } from '../../../../models/schema';
import { Args } from '../../Args';

interface IDirectiveItem {
  directive: TDirective;
}

export const DirectiveItem: FC<IDirectiveItem> = ({ directive }) => {
  return (
    <li className="flex flex-col gap-2">
      {directive.description.length > 0 && (
        <p>
          <b>Description: </b> {directive.description}
        </p>
      )}
      <p>
        <b>Locations: </b>
        {directive.locations.join(', ')}
      </p>
      <Args args={directive.args} />
    </li>
  );
};
