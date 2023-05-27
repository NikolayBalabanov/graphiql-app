import React, { FC } from 'react';
import { TDirective } from '../../../../models/schema';
import { AccordionItem } from '../AccordionItem';
import { DirectiveItem } from './DirectiveItem';

interface IAccordionDirList {
  listItems: TDirective[];
}

export const AccordionDirList: FC<IAccordionDirList> = ({ listItems }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };
  const items = listItems.map((item) => (
    <AccordionItem
      key={item.name}
      name={item.name}
      isOpen={expanded === item.name}
      setOpen={handleChange}
    >
      <DirectiveItem directive={item} />
    </AccordionItem>
  ));
  return <ul>{items}</ul>;
};
