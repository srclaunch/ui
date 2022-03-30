import { ReactElement } from 'react';
import { FormField } from '../../types';
export declare type FormFieldsProps = {
    readonly entity?: {
        readonly [f: string]: unknown;
    } & {
        readonly id?: string;
    };
    readonly fields: readonly FormField[];
    readonly onChange?: (fields: {
        readonly [name: string]: FormField;
    }) => unknown;
};
export declare const FormFields: import("react").MemoExoticComponent<({ entity, fields, onChange, ...props }: FormFieldsProps) => ReactElement>;
//# sourceMappingURL=FormFields.d.ts.map