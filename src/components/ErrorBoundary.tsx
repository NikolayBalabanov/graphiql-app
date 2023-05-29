import { Component, ReactNode } from 'react';
import { NeverPage } from '../pages/NeverPage';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return <NeverPage text="Oops! There is an unexpected Error..." />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
