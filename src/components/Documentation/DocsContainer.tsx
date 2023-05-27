import React, { FC, useEffect, useState } from 'react';
import { rootAPI } from '../../redux/rootApi';
import { docQuery } from '../../shared/docQuery';
import { DocsHeader } from './DocsHeader';
import Loader from '../UI/Loader';
import { DocsTabPage } from './DocsTabPage';
import { StyledEngineProvider } from '@mui/material/styles';

interface IDocsContainer {
  onClose: () => void;
}

export const TabsType = {
  queryType: 'queryType',
  types: 'types',
  directives: 'directives',
} as const;
export type TTabsType = keyof typeof TabsType;
const tabsArr: TTabsType[] = ['directives', 'queryType', 'types'];

export const DocsContainer: FC<IDocsContainer> = ({ onClose }) => {
  const [queryData, { data, isLoading, isError }] = rootAPI.useGetApiDocQueryMutation();
  const [tab, setTab] = useState<TTabsType>(TabsType.types);
  useEffect(() => {
    queryData({ query: docQuery });
  }, [queryData]);
  return (
    <StyledEngineProvider injectFirst>
      <div className="p-3 flex flex-col gap-3 h-full overflow-hidden">
        <DocsHeader
          tabs={data ? tabsArr : []}
          onClose={() => onClose()}
          onPickTab={(newTab: TTabsType) => setTab(newTab)}
        />
        <div className="bg-BGcolor overflow-auto">
          {isLoading && <Loader />}
          {isError && <div>Oops! Error while fetching documentation</div>}
          {data && (
            <DocsTabPage
              tabName={tab}
              directives={data.data.__schema.directives}
              queryType={data.data.__schema.queryType.name}
              types={data.data.__schema.types}
            />
          )}
        </div>
      </div>
    </StyledEngineProvider>
  );
};

export default DocsContainer;
