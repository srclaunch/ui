import { HttpClient } from '@srclaunch/http-client';
import { ReactElement } from 'react';
import { ContainerProps } from '../../layout/Container';
declare type EntityPanelProps = ContainerProps & {
    readonly actions?: Record<string, (...args: readonly any[]) => any>;
    readonly httpClient?: typeof HttpClient;
};
export declare const EntityPanel: import("react").MemoExoticComponent<({ actions, ...props }: EntityPanelProps) => ReactElement>;
export {};
//# sourceMappingURL=EntityPanel.d.ts.map