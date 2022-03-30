import { Model } from '@srclaunch/types';
import { ReactElement } from 'react';
import { ContainerProps } from '../../layout/Container';
declare type EntityEditorProps = ContainerProps & {
    readonly actions?: Record<string, (...args: readonly any[]) => any>;
    readonly id?: string;
    readonly model: Model;
};
export declare const EntityEditor: import("react").MemoExoticComponent<({ actions, className, id, model }: EntityEditorProps) => ReactElement>;
export {};
//# sourceMappingURL=EntityEditor.d.ts.map