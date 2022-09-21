import React, {FC, useCallback, useMemo, useState} from 'react';
import {FormBuilder} from 'src/form_builder/components';
import {TControl, TForm} from 'src/form_builder/@types/formBuilder';
import {TextControl} from 'src/form_builder/components/TextControl';
import {Form} from 'src/form_builder/components/Form';
import {FormItem} from 'src/form_builder/components/FormItem';
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

  const formComponent = useMemo(
    () => (
      <>
        <Form>
          {form.map((field, index) => (
            <FormItem key={index} onClick={() => setActive(index)} isActive={index === active}>
              {getFieldControl(field)}
            </FormItem>
          ))}
        </Form>
      </>
    ),
    [active, form]
  );

  const optionsComponent = useMemo(() => {
    return <SettingsControl control={form[active]} />;
  }, [active, form]);

  return <FormBuilder form={formComponent} options={optionsComponent} />;
};
