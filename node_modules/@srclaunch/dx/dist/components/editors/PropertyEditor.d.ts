import { JSONObject } from '@srclaunch/types';
import { ReactElement } from 'react';
import { InputValueChangeHandler } from '../../types';
import { ContainerProps } from '../layout/Container';
declare type PropertyEditorProps = ContainerProps & {
    readonly defaultValue?: JSONObject;
    readonly hidden?: boolean;
    readonly label?: string;
    readonly name?: string;
    readonly onChange?: InputValueChangeHandler<Record<string, unknown>>;
    readonly required?: boolean;
    readonly value?: JSONObject;
};
export declare const PropertyEditor: import("react").MemoExoticComponent<({ background, borderRadius, className, defaultValue, ...props }: PropertyEditorProps) => ReactElement>;
export {};
//# sourceMappingURL=PropertyEditor.d.ts.map