import React, { FC } from 'react';
import { DocsBtn } from './DocsBtn';
import { DocsTabsList } from './tabs/DocsTabsList';
import { TTabsType } from './DocsContainer';

//

interface IDocsHeader {
  onClose: () => void;
  tabs: TTabsType[];
  onPickTab: (newTab: TTabsType) => void;
  currentTab: TTabsType;
}

export const DocsHeader: FC<IDocsHeader> = ({ onClose, tabs, onPickTab, currentTab }) => {
  return (
    <header className="flex justify-between">
      <DocsTabsList
        current={currentTab}
        tabs={tabs}
        onTabClick={(data: TTabsType) => onPickTab(data)}
      />
      <DocsBtn onClick={onClose} isClose />
    </header>
  );
};
