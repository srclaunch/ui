import { Component } from 'react';
import { Logger } from '@srclaunch/logger';
import { Exception } from '@srclaunch/exceptions';

type ComponentProps = Record<string, unknown>;
type ComponentState = { exception?: Exception; hasError: boolean };

export class ErrorBoundary extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps | Readonly<ComponentState>) {
    super(props);
    this.state = { exception: undefined, hasError: false };
  }

  static getDerivedStateFromError(err: Error): {
    exception: Exception;
    hasError: boolean;
  } {
    const logger = new Logger();
    const exception = new Exception(err.name + ': ' + err.message, {
      cause: err,
    });
    logger.exception(exception.toJSON());

    return { exception, hasError: true };
  }

  override componentDidCatch(err: Error): void {}

  override render(): React.ReactNode {
    return this.state.hasError ? (
      <>{this.state.exception?.message}</>
    ) : (
      <>{this.props.children}</>
    );
  }
}
