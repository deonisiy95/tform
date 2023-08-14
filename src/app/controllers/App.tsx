import React, {PropsWithChildren} from 'react';
import App from 'src/app/components/App';
import Menu from 'src/menu/controllers';

export default function AppController({children}: PropsWithChildren<{}>) {
  return <App menu={<Menu />}>{children}</App>;
}
