import React, { FC } from 'react';
import { TType } from '../../../../models/schema';
import { AccordionItem } from '../AccordionItem';
import { TypesItem } from './TypesItem';

interface IAccordionTypesList {
  listItems: TType[];
}

export const AccordionTypesList: FC<IAccordionTypesList> = ({ listItems }) => {
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
      <TypesItem type={item} />
    </AccordionItem>
  ));
  return <ul>{items}</ul>;
};
