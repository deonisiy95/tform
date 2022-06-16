import Api from 'src/core/scripts/api';
import {IS_DEVELOPMENT} from 'src/core/env';

const consoleAPI = {
  Api
};

if (IS_DEVELOPMENT) {
  (window as Window & typeof globalThis & {c: typeof consoleAPI}).c = consoleAPI;
}

