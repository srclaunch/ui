import { ReactElement } from 'react';
import { HttpClient } from '@srclaunch/http-client';
import { ContainerProps } from '../../../types';
declare type EntityPanelProps = ContainerProps<HTMLDivElement, {
    actions?: Record<string, (...args: any[]) => any>;
    httpClient?: typeof HttpClient;
}>;
export declare const EntityPanel: import("react").MemoExoticComponent<({ actions, ...props }: EntityPanelProps) => ReactElement>;
export {};
//# sourceMappingURL=EntityPanel.d.ts.map