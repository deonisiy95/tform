import {configureStore} from '@reduxjs/toolkit';
import {reducers} from 'src/reducers';

const loggerMiddleware = () => (next: any) => (action: any) => {
  if (action) {
    try {
      next(action);
    } catch (error) {
      console.error(action, error?.message);
    }
  }
  console.log(`${action.type}`, action);
};

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(loggerMiddleware)
});

export type TStore = ReturnType<typeof store.getState>;

(window as any).store = store;

export default store;
