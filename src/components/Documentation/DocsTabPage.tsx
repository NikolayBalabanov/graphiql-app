import React, { FC } from 'react';
import { TTabsType, TabsType } from './DocsContainer';
import { DocsDirectives } from './pages/Directives/DocsDirectives';
import { DocsQuery } from './pages/DocsQuery';
import { DocsTypes } from './pages/Types/DocsTypes';
import { TDirective, TType } from '../../models/schema';

interface IDocsTabPage {
  tabName: TTabsType;
  queryType: string;
  types: TType[];
  directives: TDirective[];
}

export const DocsTabPage: FC<IDocsTabPage> = ({ tabName, directives, queryType, types }) => {
  switch (tabName) {
    case TabsType.directives:
      return <DocsDirectives directives={directives} />;
    case TabsType.queryType:
      return <DocsQuery name={queryType} />;
    default:
      return <DocsTypes types={types} />;
  }
};
