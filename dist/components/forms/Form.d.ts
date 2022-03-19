import { Model, ValidationProblem } from '@srclaunch/types';
import { ReactElement } from 'react';
import { Amount, FormField } from '../../types';
import { ContainerProps } from '../layout/Container';
import { ButtonProps } from './buttons/Button';
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
    readonly onChange?: ({ fields, validation, }: {
        readonly fields: {
            readonly [name: string]: FormField;
        };
        readonly validation?: {
            readonly validated?: boolean;
            readonly problems?: readonly ValidationProblem[];
        };
    }) => unknown;
    readonly onSubmit?: ({ fields, validation, values, }: {
        readonly fields: {
            readonly [name: string]: FormField;
        };
        readonly validation?: {
            readonly problems?: readonly ValidationProblem[];
            readonly validated?: boolean;
        };
        readonly values?: {
            readonly [name: string]: unknown;
        };
    }) => unknown;
    readonly padding?: Amount;
    readonly submitButton?: ({
        readonly label: string;
    } & ButtonProps) | null;
} & ContainerProps;
export declare const Form: import("react").MemoExoticComponent<({ borderRadius, className, entity, fields, inProgress, onChange, onSubmit, model, name, padding, submitButton, ...props }: FormProps) => ReactElement>;
export {};
//# sourceMappingURL=Form.d.ts.map