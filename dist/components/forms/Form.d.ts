import { Model, ValidationProblem } from '@srclaunch/types';
import { ReactElement } from 'react';
import { Amount, FormField, Size } from '../../types';
import { ButtonType } from './buttons/Button';
declare type FormProps = {
    readonly cancelButton?: {
        readonly label: string;
    };
    readonly className?: string;
    readonly entity?: ({
        readonly [f: string]: unknown;
    } & {
        readonly id?: string;
    }) | undefined;
    readonly fields?: readonly FormField[];
    readonly inProgress?: boolean;
    readonly model?: Model;
    readonly name: string;
    readonly onChange?: ({ fields, validated, problems, }: {
        readonly fields: {
            readonly [name: string]: FormField;
        };
        readonly validated?: boolean;
        readonly problems?: readonly ValidationProblem[];
    }) => unknown;
    readonly onSubmit?: ({ fields, validated, values, problems, }: {
        readonly fields: {
            readonly [name: string]: FormField;
        };
        readonly validated?: boolean;
        readonly values?: {
            readonly [name: string]: unknown;
        };
        readonly problems?: readonly ValidationProblem[];
    }) => unknown;
    readonly padding?: Amount;
    readonly submitButton?: {
        readonly fullWidth?: boolean;
        readonly label: string;
        readonly size?: Size;
        readonly type?: ButtonType;
    } | null;
};
export declare const Form: import("react").MemoExoticComponent<({ className, entity, fields, inProgress, onChange, onSubmit, model, name, padding, submitButton, ...props }: FormProps) => ReactElement>;
export {};
//# sourceMappingURL=Form.d.ts.map