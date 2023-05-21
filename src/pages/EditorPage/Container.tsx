import React from 'react';
import { Editor } from './Editor';
import { Response } from './Response';
import { rootAPI } from '../../redux/rootApi';

export const Container = () => {
  const [queryData, { data, isLoading }] = rootAPI.useGetApiQueryMutation();
  return (
    <div className="ml-8 p-2 grow bg-BGcolor2 rounded-2xl flex">
      <Editor getQueryData={queryData} />
      <Response data={JSON.stringify(data, null, '\t')} isLoading={isLoading} />
    </div>
  );
};
