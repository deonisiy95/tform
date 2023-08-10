import React, {FC} from 'react';

import style from './style.less';
import Icon from 'UI/Icon';

interface IProps {
  icon: string;
  text?: string;
  color?: string;
}

const ICONS = ['mail', 'question', 'shopping'];

export const WidgetButton: FC<IProps> = ({text, icon, color}) => {
  const styles = color ? {backgroundColor: color} : {};

  return (
    <div className={style.button} style={styles}>
      <Icon type={ICONS.includes(icon) ? icon : 'question'} className={style.icon} />
      {text ? <div className={style.text}>{text}</div> : null}
    </div>
  );
};
