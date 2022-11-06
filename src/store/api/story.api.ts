import { Item } from '../../models/item';
import { SaveHTML } from '../../models/save-html';
import {hackerApi} from './hacker.api';
import moment from 'moment'
import { Id } from '@reduxjs/toolkit/dist/tsHelpers';

type StoryResponse = Item[]

const stroyApi = hackerApi.injectEndpoints({
  endpoints: (build) => ({
    getStoriesIds: build.query<StoryResponse, void>({
      query: () => ({ 
        url: 'topstories.json',
        params: {
          print: 'pretty'
        }
      }),
      transformResponse: (response: Item['id'][]) => response.slice(0, 100).map(id => ({id} as Item)),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Story', id } as const)),
        { type: 'Story' as const, id: 'LIST' },
      ],
    }),
    getItem: build.query<Item, Partial<Item>>({
      query: ({id}) => ({
        url: `item/${id}.json`,
        params: {
          print: 'pretty'
        }
      }),
      providesTags: (_post, _err, {id}) => [{ type: 'Story', id }],
      transformResponse: (response: any) => (
        {
          ...response,
          humTime: moment(response.time * 1000).format(' HH:mm DD.MM.YYYY '),
          innerHtmlText: {__html: response.text } as SaveHTML,
        }
      )
    }),
  }),
  overrideExisting: false,
})

export const { useGetStoriesIdsQuery, useGetItemQuery, useLazyGetItemQuery, useLazyGetStoriesIdsQuery, endpoints } = stroyApi;