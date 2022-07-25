import React, {useCallback} from 'react';
import style from './style.less';
import cn from 'classnames';
import Icon from 'UI/Icon';

interface IProps {
  list: string[];
  active: number;
  className?: string;
}

export default function StepsProgress({list, active, className}: IProps) {
  const boxColor = (i: number) => (i <= active ? style.primary : style.gray);
  const iconColor = (i: number) => (i <= active ? style.orange : style.black);
  const getPosition = useCallback(() => {
    const step = 100 / (list.length - 1);
    const left = !active ? step / 2 : active === list.length - 1 ? 100 : step * active + step / 2;
    return `${left}%`;
  }, [active]);
  return (
    <div className={cn(style.wrapper, [className])}>
      <div
        className={cn(style.line, style.gray)}
        style={{'--left-position': getPosition()} as React.CSSProperties}
      >
        <div className={cn(style.line, style.active, style.primary)} />
        <div className={cn(style.dotted, style.primary)} data-position={active} />
      </div>
      {list.map((icon, i) => (
        <div
          key={`icon-${i}`}
          className={cn(style.iconWrapper, {[style.active]: !!active}, boxColor(i))}
        >
          <Icon key={icon} type={icon} className={iconColor(i)} />
        </div>
      ))}
    </div>
  );
}
