import React, {FC} from 'react';
import style from './style.less';
import {MenuItem} from 'src/form_builder/components/Menu/Item';
import {TTypeControl} from 'src/form_builder/@types/formBuilder';
import cn from 'classnames';
import Button from 'UI/Button';
import useProcessingButton from 'src/core/hooks/useProcessingButton';

interface IProps {
  items: TTypeControl[];
  form: React.ReactNode;
  options: React.ReactNode;
  onAddControl: (type: TTypeControl) => void;
  onSave: () => Promise<void>;
  onCancel: () => void;
}

export const FormBuilder: FC<IProps> = ({items, form, options, onAddControl, onSave, onCancel}) => {
  const [processing, onSaveHandler] = useProcessingButton(onSave);

  return (
    <div className={style.container}>
      <div className={style.form}>
        <div className={style.menu}>
          {items.map((item, index) => (
            <MenuItem key={index} title={l10n(item)} type={item} onClick={onAddControl} />
          ))}
        </div>
        <div className={cn(style.content, 'scroll')}>{form}</div>
        <div className={cn(style.settings, 'scroll')}>{options}</div>
      </div>
      <div className={style.controls}>
        <Button color={'light'} onClick={onCancel} size={'sm'}>
          {l10n('cancel')}
        </Button>
        <Button
          className={style.buttonSave}
          size={'sm'}
          onClick={onSaveHandler}
          isLoad={processing}
        >
          {l10n('save')}
        </Button>
      </div>
    </div>
  );
};
