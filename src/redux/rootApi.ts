import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { TSchema } from '../models/schema';

type TQuery = { query: string };

export const rootAPI = createApi({
  reducerPath: 'rootAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/graphql',
  }),
  tagTypes: ['Data', 'Doc'],
  endpoints: (build) => ({
    getApiQuery: build.mutation<void, TQuery>({
      query: (requestBody) => ({
        url: '',
        method: 'POST',
        params: {
          api_key: import.meta.env.VITE_APP_APY_KEY,
        },
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
        },
        providesTags: () => ['Data'],
      }),
    }),
    getApiDocQuery: build.mutation<TSchema, TQuery>({
      query: (requestBody) => ({
        url: '',
        method: 'POST',
        params: {
          api_key: import.meta.env.VITE_APP_APY_KEY,
        },
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
        },
        providesTags: () => ['Doc'],
      }),
    }),
  }),
});
