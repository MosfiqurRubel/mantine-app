import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Category } from '@/types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/API',
    prepareHeaders: (headers) => {
      headers.set('moduleid', '524');
      headers.set('tabid', '95');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLandingCategories: builder.query<Category[], void>({
      query: () => '/Order.RL.Module/OrderRL//GetLandingCategories', // query--> which url I've to request
    }),
  }),
  tagTypes: [],
});

export const { useGetLandingCategoriesQuery } = apiSlice;
