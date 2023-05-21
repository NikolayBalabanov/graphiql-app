import React, { FC } from 'react';
import Loader from '../../components/UI/Loader';

interface IResponse {
  data: string;
  isLoading: boolean;
}

export const Response: FC<IResponse> = ({ data, isLoading }) => {
  return <div className="w-1/2 px-2">{isLoading ? <Loader /> : <pre>{data}</pre>}</div>;
};
