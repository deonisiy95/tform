import React, {useState, useCallback, useMemo} from 'react';
import Input from 'UI/Input';
import Field from 'UI/Field';
import AddWidgetComponent from 'src/widgets/components/Add';

export default function AddWidget() {
  // const name = useRef<HTMLInputElement>();
  const [step, setStep] = useState(0);

  const onNext = useCallback(() => {
    setStep(step + 1);
  }, [step]);

  const steps = useMemo(
    () => [
      <>
        <span>{l10n('widgets.add.step.one.text')}</span>
        <ol>
          <li>{l10n('widgets.add.step.one.sub_step_1')}</li>
          <li>{l10n('widgets.add.step.one.sub_step_2')}</li>
          <li>{l10n('widgets.add.step.one.sub_step_3')}</li>
          <li>{l10n('widgets.add.step.one.sub_step_4')}</li>
          <li>{l10n('widgets.add.step.one.sub_step_5')}</li>
        </ol>
      </>,
      <>
        <Field title={l10n('name')} text={l10n('widgets.add.field.name')}>
          <Input placeholder={l10n('name')} />
        </Field>
        <Field
          title={l10n('widgets.add.field.token.title')}
          text={l10n('widgets.add.field.token.text')}
        >
          <Input placeholder={l10n('token')} />
        </Field>
      </>,
      <>
        <span>{l10n('widgets.add.step.three.text')}</span>
        <ol>
          <li>{l10n('widgets.add.step.three.sub_step_1')}</li>
          <li>{l10n('widgets.add.step.three.sub_step_2')}</li>
          <li>{l10n('widgets.add.step.three.sub_step_3')}</li>
          <li>{l10n('widgets.add.step.three.sub_step_4')}</li>
        </ol>
      </>
    ],
    [step]
  );

  return (
    <div>
      <AddWidgetComponent onNext={onNext} step={step}>
        {steps[step]}
      </AddWidgetComponent>
    </div>
  );
}
