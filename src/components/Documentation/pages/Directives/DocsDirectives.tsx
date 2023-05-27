import React, { FC } from 'react';
import { TDirective } from '../../../../models/schema';
import { AccordionDirList } from './AccordionDirList';

interface IDocsDirectives {
  directives: TDirective[];
}

export const DocsDirectives: FC<IDocsDirectives> = ({ directives }) => {
  return (
    <div>
      <AccordionDirList listItems={directives} />
    </div>
  );
};
