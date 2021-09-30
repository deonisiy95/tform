import {configureStore} from '@reduxjs/toolkit';
import {reducers} from 'src/reducers';
import {runSagas} from 'src/sagas';
import createSagaMiddleware from 'redux-saga';

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
const sagaMiddleware = createSagaMiddleware();

const middlewares = [loggerMiddleware, sagaMiddleware];

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), ...middlewares]
});

runSagas(sagaMiddleware);

export type TStore = ReturnType<typeof store.getState>;

(window as any).store = store;

export default store;
