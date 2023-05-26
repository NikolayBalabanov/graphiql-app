import React from 'react';
import { Editor } from './Editor';
import { Response } from './Response';
import { rootAPI } from '../../redux/rootApi';

export const Container = () => {
  const [queryData, { data, isLoading }] = rootAPI.useGetApiQueryMutation();
  console.log('documentation', data);
  return (
    <div className="p-2 md:w-10/12 bg-BGcolor1 rounded-2xl flex justify-between">
      <Editor getQueryData={queryData} />
      <Response data={JSON.stringify(data, null, '\t')} isLoading={isLoading} />
    </div>
  );
};
