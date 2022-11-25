import React, {FC, useMemo, useState, useCallback} from 'react';
import {FormBuilder} from 'src/form_builder/components';
import {TControl, TForm, TTypeControl} from 'src/form_builder/@types/formBuilder';
import {Form} from 'src/form_builder/components/Form';
import {SettingsControl} from 'src/form_builder/components/Options';
import {initControl} from 'src/form_builder/components/Menu';

const menuItems: TTypeControl[] = ['input', 'title', 'text', 'checkbox', 'select'];

export const FormBuilderController: FC = () => {
  const [active, setActive] = useState(0);
  const [form, setForm] = useState<TForm>(() => [
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
        placeholder: 'plasad',
        is_require: true,
        is_multiline: false
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

  const onDelete = useCallback(
    (index: number) => {
      if (typeof index !== 'number') {
        return;
      }

      const list = Object.assign([], form);

      list.splice(index, 1);

      setActive(0);

      setForm(list);
    },
    [form, active]
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
        onDelete={onDelete}
      />
    );
  }, [active, form, onChange, onUp, onDown, onDelete]);

  const onAdd = useCallback(
    (type: TTypeControl) => {
      const list = Object.assign([], form);

      list.push(initControl(type));

      setActive(list.length - 1);

      setForm(list);
    },
    [form]
  );

  return (
    <FormBuilder
      items={menuItems}
      form={formComponent}
      options={optionsComponent}
      onAddControl={onAdd}
    />
  );
};
