import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import { rootAPI } from './rootApi';

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rootAPI.middleware),
  });

const store = setupStore();
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
