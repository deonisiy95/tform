import React, {FC, useCallback} from 'react';
import style from './style.less';
import {FormItem} from 'src/form_builder/components/FormItem';
import {TControl, TForm} from 'src/form_builder/@types/formBuilder';
import {TextControl} from 'src/form_builder/components/TextControl';

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
        return <div>Title control</div>;
      default:
        return null;
    }
  }, []);

  return (
    <div className={style.form}>
      {form.map((field, index) => (
        <FormItem key={index} onClick={() => setActive(index)} isActive={index === active}>
          {getFieldControl(field)}
        </FormItem>
      ))}
    </div>
  );
};
