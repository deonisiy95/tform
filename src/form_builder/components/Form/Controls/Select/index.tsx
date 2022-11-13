import React, {FC} from 'react';
import style from './style.less';
import {ISelectControl} from 'src/form_builder/@types/formBuilder';
import Field from 'UI/Field';
import {RequiredMark} from 'src/form_builder/components/Form/Required';
import Icon from 'UI/Icon';

interface IProps {
  value: ISelectControl['value'];
}

export const SelectControl: FC<IProps> = ({value}) => {
  return (
    <div className={style.control}>
      <Field
        title={
          <>
            {value.is_require ? <RequiredMark /> : null}
            {value.title || l10n('enter.title')}
          </>
        }
        text={value.text}
      >
        <div className={style.input}>
          {l10n('not.selected')}
          <Icon type={'arrow-down'} className={style.icon} />
        </div>
      </Field>
    </div>
  );
};
