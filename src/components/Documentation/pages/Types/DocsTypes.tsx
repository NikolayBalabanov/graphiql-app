import React, { FC } from 'react';
import { TType } from '../../../../models/schema';
import { AccordionTypesList } from './AccordionTypesList';

interface IDocsTypes {
  types: TType[];
}

export const DocsTypes: FC<IDocsTypes> = ({ types }) => {
  return (
    <div>
      <AccordionTypesList listItems={types} />
    </div>
  );
};
