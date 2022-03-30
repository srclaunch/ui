import { Model } from '@srclaunch/types';
import { ReactElement } from 'react';
import { Amount, FormField, States } from '../../types';
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
    readonly states?: States;
    readonly fields?: readonly FormField[];
    readonly inProgress?: boolean;
    readonly model?: Model;
    readonly name: string;
    readonly padding?: Amount;
    readonly submitButton?: ({
        readonly label: string;
    } & ButtonProps) | null;
} & ContainerProps;
export declare const Form: import("react").MemoExoticComponent<({ borderRadius, className, entity, events, fields, inProgress, model, name, padding, submitButton, ...props }: FormProps) => ReactElement>;
export {};
//# sourceMappingURL=Form.d.ts.map