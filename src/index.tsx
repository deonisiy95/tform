import store from 'src/store';
import appActions from 'src/app/actions';
import 'src/core/utils/console';
import 'src/styles/index.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

console.log('Start App');

store.dispatch(appActions.initApp());
