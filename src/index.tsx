import store from 'src/store';
import appActions from 'src/app/actions';
import 'src/core/utils/console';
import 'src/styles/index.less';

console.log('Start App');

store.dispatch(appActions.initApp());
