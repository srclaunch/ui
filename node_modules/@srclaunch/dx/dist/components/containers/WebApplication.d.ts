import { ReactElement } from 'react';
import { HttpClient } from '@srclaunch/http-client';
import { ContainerProps } from '../layout/Container';
declare type WebApplicationProps = ContainerProps & {
    readonly authentication?: boolean;
    readonly actions?: Record<string, (...args: readonly any[]) => any>;
    readonly httpClient?: typeof HttpClient;
};
export declare const WebApplication: import("react").MemoExoticComponent<({ actions, authentication, background, children, className, httpClient, size, ...props }: WebApplicationProps) => ReactElement>;
export {};
//# sourceMappingURL=WebApplication.d.ts.map