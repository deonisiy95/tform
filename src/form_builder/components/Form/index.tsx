import React, {FC, useCallback} from 'react';
import style from './style.less';
import {FormItem} from './Item';
import {TControl, TForm} from 'src/form_builder/@types/formBuilder';
import {TextControl} from 'src/form_builder/components/Form/Controls/Text';
import {TitleControl} from 'src/form_builder/components/Form/Controls/Title';
import {InputControl} from 'src/form_builder/components/Form/Controls/Input';
import {CheckBoxControl} from 'src/form_builder/components/Form/Controls/Checkbox';
import {SelectControl} from 'src/form_builder/components/Form/Controls/Select';
import Button from 'UI/Button';

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
      case 'checkbox':
        return <CheckBoxControl value={control.value} />;
      case 'select':
        return <SelectControl value={control.value} />;
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
      <Button className={style.submit} size={'sm'}>
        Отправить
      </Button>
    </div>
  );
};
