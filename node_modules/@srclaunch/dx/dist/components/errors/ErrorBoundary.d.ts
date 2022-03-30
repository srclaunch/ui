import { Component } from 'react';
import { Exception } from '@srclaunch/exceptions';
declare type ComponentProps = Record<string, unknown>;
declare type ComponentState = {
    exception?: Exception;
    hasError: boolean;
};
export declare class ErrorBoundary extends Component<ComponentProps, ComponentState> {
    constructor(props: ComponentProps | Readonly<ComponentState>);
    static getDerivedStateFromError(err: Error): {
        exception: Exception;
        hasError: boolean;
    };
    componentDidCatch(err: Error): void;
    render(): React.ReactNode;
}
export {};
//# sourceMappingURL=ErrorBoundary.d.ts.map