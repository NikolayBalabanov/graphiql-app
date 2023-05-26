import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

type TQuery = { query: string };

export const rootAPI = createApi({
  reducerPath: 'rootAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/graphql',
  }),
  tagTypes: ['Data', 'Doc'],
  endpoints: (build) => ({
    getApiQuery: build.mutation<unknown, TQuery>({
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
    getApiDocQuery: build.mutation<unknown, TQuery>({
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
