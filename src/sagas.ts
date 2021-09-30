import {SagaMiddleware} from 'redux-saga';
import {Saga} from '@redux-saga/types';
import appSaga from 'src/app/sagas';

export function runSagas(mw: SagaMiddleware<object>) {
  const run = (saga: Saga, sagaName: string) => {
    mw.run(saga)
      .toPromise()
      .catch(e => {
        console.error({message: e.message, source: sagaName});
      });
  };

  run(appSaga, 'appSaga');
}
