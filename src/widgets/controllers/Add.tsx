import React from 'react';
import Input from 'UI/Input';
import Field from 'UI/Field';
import AddWidgetComponent from 'src/widgets/components/Add';

export default function AddWidget() {
  // const name = useRef<HTMLInputElement>();

  return (
    <div>
      <AddWidgetComponent>
        <Field title={l10n('name')} text={l10n('widgets.add.field.name')}>
          <Input placeholder={l10n('name')} />
        </Field>
      </AddWidgetComponent>
    </div>
  );
}
