import { ReactElement } from 'react';
import { Model } from '@srclaunch/types';
import { ContainerProps } from '../../layout/Container';
declare type EntityEditorProps = ContainerProps<HTMLDivElement, {
    actions?: Record<string, (...args: any[]) => any>;
    id?: string;
    model: Model;
}>;
export declare const EntityEditor: import("react").MemoExoticComponent<({ actions, className, id, model }: EntityEditorProps) => ReactElement>;
export {};
//# sourceMappingURL=EntityEditor.d.ts.map