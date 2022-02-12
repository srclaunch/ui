import { HttpClient } from '@srclaunch/http-client';
import { ReactElement } from 'react';
import { ContainerProps } from '../../types';
declare type WebApplicationProps = {
    readonly authentication?: boolean;
    readonly actions?: Record<string, (...args: readonly any[]) => any>;
    readonly httpClient?: typeof HttpClient;
} & ContainerProps<HTMLDivElement>;
export declare const WebApplication: import("react").MemoExoticComponent<({ authentication, actions, backgroundColor, children, className, httpClient, ...props }: WebApplicationProps) => ReactElement>;
export {};
//# sourceMappingURL=WebApplication.d.ts.map