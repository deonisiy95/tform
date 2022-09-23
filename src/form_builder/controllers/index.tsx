import React, {FC, useMemo, useState} from 'react';
import {FormBuilder} from 'src/form_builder/components';
import {TForm} from 'src/form_builder/@types/formBuilder';
import {Form} from 'src/form_builder/components/Form';
import {SettingsControl} from 'src/form_builder/components/SettingsControl';

export const FormBuilderController: FC = () => {
  const [active, setActive] = useState(0);
  const [form] = useState<TForm>([
    {
      type: 'title',
      value: 'Tile asd'
    },
    {
      type: 'text',
      value: 'Text vlaue'
    }
  ]);

  const formComponent = useMemo(() => <Form form={form} active={active} setActive={setActive} />, [
    active,
    form
  ]);

  const optionsComponent = useMemo(() => {
    return <SettingsControl control={form[active]} />;
  }, [active, form]);

  return <FormBuilder form={formComponent} options={optionsComponent} />;
};
