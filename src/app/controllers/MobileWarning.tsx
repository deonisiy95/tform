import React, {FC, PropsWithChildren} from 'react';
import {useSelector} from 'react-redux';
import {selectIsMobileWarning} from 'src/app/selectors';
import {MobileWarningComponent} from 'src/app/components/MobileWarning';

export const MobileWarning: FC<PropsWithChildren<unknown>> = ({children}) => {
  const isMobileWarning = useSelector(selectIsMobileWarning);

  if (isMobileWarning) {
    return <MobileWarningComponent />;
  }

  return <>{children}</>;
};
