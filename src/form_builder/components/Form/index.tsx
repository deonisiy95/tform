import React, {FC, useCallback} from 'react';
import style from './style.less';
import {FormItem} from 'src/form_builder/components/FormItem';
import {TControl, TForm} from 'src/form_builder/@types/formBuilder';
import {TextControl} from 'src/form_builder/components/Form/Controls/Text';
import {TitleControl} from 'src/form_builder/components/Form/Controls/Title';
import {InputControl} from 'src/form_builder/components/Form/Controls/Input';

interface IProps {
  form: TForm;
  active: number;
  setActive: (index: number) => void;
}

export const Form: FC<IProps> = ({form, active, setActive}) => {
  const getFieldControl = useCallback((control: TControl) => {
    switch (control.type) {
      case 'text':
        return <TextControl value={control.value} />;
      case 'title':
        return <TitleControl value={control.value} />;
      case 'input':
        return <InputControl value={control.value} />;
      default:
        return null;
    }
  }, []);

  const onSelect = (index: number) => () => {
    setActive(index);
  };

  return (
    <div className={style.form}>
      {form.map((field, index) => (
        <FormItem key={index} onClick={onSelect(index)} isActive={index === active}>
          {getFieldControl(field)}
        </FormItem>
      ))}
    </div>
  );
};
