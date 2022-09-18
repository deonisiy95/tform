import {useMemo} from 'react';
import {IWidget} from 'src/widgets/@types';

export const useAgentsList = (agents: IWidget['agents']) => {
  return useMemo(() => {
    if (!agents.length) {
      return l10n('widget.agents.notExist');
    }

    return agents.map(agent => agent.name ?? agent.username).join(', ');
  }, [agents]);
};
