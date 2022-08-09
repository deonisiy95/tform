import React, {useState, useCallback, useMemo, useRef} from 'react';
import Input from 'UI/Input';
import Field from 'UI/Field';
import AddWidgetComponent from 'src/widgets/components/Add';
import {widgetsApiActions} from 'src/widgets/actions/api';
import {IWidget} from 'src/widgets/@types';
import {Agent} from 'src/widgets/components/Agent';
import useDispatcher from 'src/core/hooks/useDispatcher';
import {widgetActions} from 'src/widgets/stores';

interface IValues {
  name: string;
  token: string;
  agents: IWidget['agents'];
}

enum STEPS {
  create_bot = 0,
  enter_credentials = 1,
  start_bot = 2,
  add_agents = 3,
  create_widget = 4
}

export default function AddWidget() {
  const nameRef = useRef<HTMLInputElement>();
  const tokenRef = useRef<HTMLInputElement>();
  const [step, setStep] = useState(0);
  const [agentIds, setAgentIds] = useState([]);
  const addWidget = useDispatcher(widgetActions.add);
  const [values, setValues] = useState<IValues>({name: '', token: '', agents: []});
  const onChangeName = () => {
    setValues({
      ...values,
      name: nameRef.current?.value
    });
  };

  const onChangeAgents = (id: number) => {
    let newIds = [];

    if (agentIds.includes(id)) {
      newIds = [...agentIds.filter(item => item !== id)];
    } else {
      newIds = [...agentIds, id];
    }

    setAgentIds(newIds);
  };

  const onChangeToken = () => {
    setValues({
      ...values,
      token: tokenRef.current?.value
    });
  };

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
        console.error('Error request check widget', error);
      }
    }

    if (step === STEPS.add_agents) {
      try {
        const result = await widgetsApiActions.create({
          token: values.token,
          name: values.name,
          agents: agentIds.filter(id => agentIds.includes(id))
        });

        if (result) {
          addWidget(result);
        }
      } catch (error) {
        console.error('Error request create widget', error);
      }

      return;
    }

    setStep(step + 1);
  }, [step, values, agentIds]);

  const disableNext = useMemo(() => {
    if (step === STEPS.enter_credentials) {
      return !values.token || !values.name;
    }

    if (step === STEPS.add_agents) {
      return agentIds.length === 0;
    }

    return false;
  }, [step, values, agentIds]);

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
          <Input ref={nameRef} placeholder={l10n('name')} maxLength={30} onChange={onChangeName} />
        </Field>
        <Field
          title={l10n('widgets.add.field.token.title')}
          text={l10n('widgets.add.field.token.text')}
        >
          <Input
            ref={tokenRef}
            placeholder={l10n('token')}
            maxLength={100}
            onChange={onChangeToken}
          />
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
        <span className={'m-b-50 block'}>{l10n('widgets.add.step.four.text')}</span>
        <div className={'scroll h-330'}>
          {values.agents.map(agent => (
            <Agent
              key={agent.id}
              name={agent.name ?? agent.username}
              onSelect={() => onChangeAgents(agent.id)}
            />
          ))}
        </div>
      </>
    ],
    [step, values, agentIds]
  );

  return (
    <AddWidgetComponent onNext={onNext} step={step} disableNext={disableNext}>
      {steps[step]}
    </AddWidgetComponent>
  );
}
