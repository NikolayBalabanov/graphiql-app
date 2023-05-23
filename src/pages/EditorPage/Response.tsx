import React, { FC } from 'react';
import Loader from '../../components/UI/Loader';

interface IResponse {
  data: string;
  isLoading: boolean;
}

export const Response: FC<IResponse> = ({ data, isLoading }) => {
  return <div className="w-1/2 px-2 ">{isLoading ? <Loader /> : <pre className='overflow-scroll max-h-96 text-xs md:text-base'>{data}</pre>}</div>;
};
