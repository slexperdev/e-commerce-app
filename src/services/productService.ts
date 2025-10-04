import { createApi } from '@reduxjs/toolkit/query/react';
import { publicBaseQuery } from './baseQuery';
import { ApiError, ProductListResponse } from '@/types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: publicBaseQuery,
  endpoints: build => ({
    fetchProducts: build.query<ProductListResponse, void, ApiError>({
        query: () => ({
        url: '/v1/products',
        method: 'GET',
      }),
    }),
  }),
});

export const {  
  useLazyFetchProductsQuery,
} = productsApi;
