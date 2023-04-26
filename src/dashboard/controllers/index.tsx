import React from 'react';
import Dashboard from 'src/dashboard/components/Dashboard';
import {Page} from 'UI/Page';

export default function DashBoard() {
  return (
    <Page title={l10n('conversations')}>
      <Dashboard />
    </Page>
  );
}
