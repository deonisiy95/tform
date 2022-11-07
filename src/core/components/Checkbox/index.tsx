import React, {forwardRef} from 'react';
import {generateId} from 'src/core/utils/string';
import cn from 'classnames';
import style from './style.less';

export interface IProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  inactive?: boolean;
}

const CheckboxComponent = (props: IProps, ref) => {
  const {className, children, inactive, ...checkBoxProps} = props;

  const uuid = generateId();

  return (
    <div className={cn(style.root, className, {[style.inactive]: inactive})}>
      <input
        id={uuid}
        ref={ref}
        type='checkbox'
        className={style.checkbox}
        {...checkBoxProps}
        disabled={inactive || checkBoxProps.disabled}
      />
      <label htmlFor={uuid}>
        <div className={style.marker} />
      </label>

      <label className={style.label} htmlFor={uuid}>
        {children}
      </label>
    </div>
  );
};

export default forwardRef(CheckboxComponent);
