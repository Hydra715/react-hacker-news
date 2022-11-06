import { createBrowserHistory } from 'history'
import {routerMiddleware, RouterState, connectRouter} from 'connected-react-router';
import {AnyAction, configureStore, Reducer} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {hackerApi} from './api/hacker.api';
// import {storySlice} from './story/story.entity';

export const history = createBrowserHistory()

export const store = configureStore({
  reducer: {
    [hackerApi.reducerPath]: hackerApi.reducer,
    router: connectRouter(history) as Reducer<RouterState, AnyAction>,
    // story: storySlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(hackerApi.middleware, routerMiddleware(history))
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>