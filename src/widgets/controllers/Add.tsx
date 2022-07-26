import React, {useState, useCallback, useMemo, useRef} from 'react';
import Input from 'UI/Input';
import Field from 'UI/Field';
import AddWidgetComponent from 'src/widgets/components/Add';
import {widgetsApiActions} from 'src/widgets/actions/api';
import {IWidget} from 'src/widgets/@types';

interface IValues {
  name: string;
  token: string;
  agents: IWidget['agents'];
}

enum STEPS {
  create_bot = 0,
  enter_credentials = 1,
  start_bot = 2,
  create_widget = 3
}

export default function AddWidget() {
  const nameRef = useRef<HTMLInputElement>();
  const tokenRef = useRef<HTMLInputElement>();
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<IValues>({name: '', token: '', agents: []});

  const onNext = useCallback(async () => {
    if (step === STEPS.enter_credentials) {
      setValues({
        ...values,
        name: nameRef.current?.value,
        token: tokenRef.current?.value
      });
    }

    if (step === STEPS.start_bot) {
      try {
        const result = await widgetsApiActions.check(values);

        if (result.agents) {
          setValues({...values, agents: result.agents});
        }
      } catch (error) {
        console.error('Error request create widget', error);
      }
    }

    setStep(step + 1);
  }, [step, values]);

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
          <Input ref={nameRef} placeholder={l10n('name')} maxLength={30} />
        </Field>
        <Field
          title={l10n('widgets.add.field.token.title')}
          text={l10n('widgets.add.field.token.text')}
        >
          <Input ref={tokenRef} placeholder={l10n('token')} maxLength={100} />
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
      </>,
      <>
        {values.agents.map(agent => (
          <div key={agent.id}>{agent.name + ' ' + agent.username}</div>
        ))}
      </>
    ],
    [step, values.agents]
  );

  return (
    <AddWidgetComponent onNext={onNext} step={step} disableNext={false}>
      {steps[step]}
    </AddWidgetComponent>
  );
}
