import { ReactElement } from 'react';
import { HttpClient } from '@srclaunch/http-client';
import { ContainerProps } from '../../types';
declare type WebApplicationProps = ContainerProps<HTMLDivElement, {
    authentication?: boolean;
    actions?: Record<string, (...args: any[]) => any>;
    httpClient?: typeof HttpClient;
}>;
export declare const WebApplication: import("react").MemoExoticComponent<({ authentication, actions, backgroundColor, children, className, httpClient, ...props }: WebApplicationProps) => ReactElement>;
export {};
//# sourceMappingURL=WebApplication.d.ts.map