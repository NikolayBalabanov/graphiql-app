import React, { FC } from 'react';
import { TTabsType } from './DocsContainer';

interface IDocsTabPage {
  tabName: TTabsType;
}

export const DocsTabPage: FC<IDocsTabPage> = ({ tabName }) => {
  return <div>DocsTabPage {tabName}</div>;
};
