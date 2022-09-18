import React, {FC, useMemo} from 'react';
import {Validation} from 'src/core/utils/validation';
import useInput from 'src/core/hooks/useInput';
import Input from 'UI/Input';
import Field from 'UI/Field';
import {IWidget} from 'src/widgets/@types';
import {SimpleList} from 'UI/SimpleList';
import {OptionsComponent} from 'src/widgets/components/Options';

interface IProps {
  name: IWidget['name'];
  token: IWidget['token'];
  agents: IWidget['agents'];
}

export const Options: FC<IProps> = ({token, name, agents}) => {
  const {onChange, invalid} = useInput(name, [Validation.notEmpty]);
  const agentList = useMemo(() => {
    if (!agents.length) {
      return <SimpleList options={[l10n('widget.agents.notExist')]} />;
    }

    return <SimpleList options={agents.map(agent => agent.name ?? agent.username)} />;
  }, [agents]);

  return (
    <OptionsComponent>
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
