import React, {FC, useCallback, useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {Validation} from 'src/core/utils/validation';
import useInput from 'src/core/hooks/useInput';
import Input from 'UI/Input';
import Field from 'UI/Field';
import {IWidget} from 'src/widgets/@types';
import {SimpleList} from 'UI/SimpleList';
import {OptionsComponent} from 'src/widgets/components/Options';
import Button from 'UI/Button';
import {updateWidget} from 'src/widgets/stores';

interface IProps {
  name: IWidget['name'];
  widgetId: IWidget['widgetId'];
  token: IWidget['token'];
  agents: IWidget['agents'];
}

export const Options: FC<IProps> = ({widgetId, token, name, agents}) => {
  const {value: newName, onChange, invalid} = useInput(name, [Validation.notEmpty]);
  const dispatch = useDispatch();

  const agentList = useMemo(() => {
    if (!agents.length) {
      return <SimpleList options={[l10n('widget.agents.notExist')]} />;
    }

    return <SimpleList options={agents.map(agent => agent.name ?? agent.username)} />;
  }, [agents]);

  const saveSettings = useCallback(() => {
    if (newName !== name) {
      dispatch(updateWidget({widgetId, name: newName}));
    }
  }, [widgetId, newName]);

  return (
    <OptionsComponent controls={
      <Button onClick={saveSettings} size={'sm'}>{l10n('save')}</Button>
    }>
      <Field title={l10n('name')}>
        <Input defaultValue={name} onChange={onChange} invalid={invalid} />
      </Field>
      <Field title={l10n('token')}>
        <Input defaultValue={token} disabled={true} />
      </Field>
      <Field title={l10n('agents')} text={l10n('widget.settings.options.agents.text')}>
        <span>{agentList}</span>
      </Field>
    </OptionsComponent>
  );
};
