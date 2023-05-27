import React, { FC } from 'react';
import { TabItem } from './TabItem';
import { TTabsType } from '../DocsContainer';

interface IDocsTabsList {
  tabs: TTabsType[];
  onTabClick: (tab: TTabsType) => void;
  current: TTabsType;
}

export const DocsTabsList: FC<IDocsTabsList> = ({ onTabClick, tabs, current }) => {
  return (
    <ul className="flex md:gap-5 gap-2 md:mr-5 mr-3 list-none">
      {tabs.map((tab) => (
        <TabItem active={current === tab} key={tab} name={tab} onClick={() => onTabClick(tab)} />
      ))}
    </ul>
  );
};
