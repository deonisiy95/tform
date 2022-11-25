import React, {Component, ErrorInfo} from 'react';
import {ErrorBoundaryScreen} from 'UI/ErrorBoundary';
import {history} from 'src/core/scripts/navigation';

interface IState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<{}, IState> {
  private unregisterListenerHistory;

  public static getDerivedStateFromError() {
    return {hasError: true};
  }

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  public componentDidMount(): void {
    this.unregisterListenerHistory = history.listen(() => {
      this.setState({hasError: false});
    });
  }

  public componentWillUnmount() {
    this.unregisterListenerHistory?.();
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo?.componentStack);
  }

  public render() {
    return (
      <ErrorBoundaryScreen hasError={this.state.hasError}>
        {this.props.children}
      </ErrorBoundaryScreen>
    );
  }
}
