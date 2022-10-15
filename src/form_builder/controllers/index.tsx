import React, {FC, useMemo, useState, useCallback} from 'react';
import {FormBuilder} from 'src/form_builder/components';
import {TControl, TForm} from 'src/form_builder/@types/formBuilder';
import {Form} from 'src/form_builder/components/Form';
import {SettingsControl} from 'src/form_builder/components/SettingsControl';

export const FormBuilderController: FC = () => {
  const [active, setActive] = useState(0);
  const [form, setForm] = useState<TForm>([
    {
      type: 'title',
      value: 'Tile asd'
    },
    {
      type: 'text',
      value: 'Text vlaue'
    },
    {
      type: 'input',
      value: {
        title: 'Input vlaue',
        text: 'Input text',
        placeholder: 'plasad'
      }
    }
  ]);

  const onChange = useCallback(
    (value: TControl['value']) => {
      const newForm = form.map((item, index) => (index === active ? {...item, value} : item));

      setForm(newForm as Array<TControl>);
    },
    [active, form]
  );

  const onDown = useCallback(
    (index: number) => {
      if (index + 1 === form.length) {
        return;
      }

      const list = Object.assign([], form);

      setActive(index + 1);

      const afterControl = list[index + 1];
      list[index + 1] = list[index];
      list[index] = afterControl;

      setForm(list);
    },
    [form]
  );

  const onUp = useCallback(
    (index: number) => {
      if (index === 0) {
        return;
      }

      const list = Object.assign([], form);

      setActive(index - 1);

      const beforeControl = list[index - 1];
      list[index - 1] = list[index];
      list[index] = beforeControl;

      setForm(list);
    },
    [form]
  );

  const formComponent = useMemo(() => <Form form={form} active={active} setActive={setActive} />, [
    active,
    form
  ]);

  const optionsComponent = useMemo(() => {
    return (
      <SettingsControl
        index={active}
        control={form[active]}
        onChange={onChange}
        onUp={onUp}
        onDown={onDown}
      />
    );
  }, [active, form]);

  return <FormBuilder form={formComponent} options={optionsComponent} />;
};
