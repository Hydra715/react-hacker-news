
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

export const hackerApi = createApi({
  reducerPath: 'hacker/api',
  baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL,
      prepareHeaders: headers => {
          headers.set('Content-Type', 'application/json;charset=UTF-8');
          headers.set('Authorization', 'anonymous');

          return headers;
      },
  }),
  tagTypes: ['Story'],
  endpoints: () => ({}),
});
