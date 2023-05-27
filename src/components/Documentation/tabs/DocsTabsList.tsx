import React, { FC } from 'react';
import { TabItem } from './TabItem';
import { TTabsType } from '../DocsContainer';

interface IDocsTabsList {
  tabs: TTabsType[];
  onTabClick: (tab: TTabsType) => void;
}

export const DocsTabsList: FC<IDocsTabsList> = ({ onTabClick, tabs }) => {
  return (
    <ul className="flex gap-5 md:mr-5 mr-3 list-none">
      {tabs.map((tab) => (
        <TabItem key={tab} name={tab} onClick={() => onTabClick(tab)} />
      ))}
    </ul>
  );
};
