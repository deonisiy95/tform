import React from 'react';
import style from './style.less';

interface IProps {
  hasError: boolean;
}

export class ErrorBoundaryScreen extends React.Component<IProps> {
  public render() {
    if (!this.props.hasError) {
      return this.props.children;
    }

    return (
      <div className={style.container}>
        <h1>{l10n('error_screen.title')}</h1>
        <p>{l10n('error_screen.text')}</p>
      </div>
    );
  }
}
