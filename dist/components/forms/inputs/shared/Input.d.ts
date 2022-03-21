import { ReactElement } from 'react';
import { AutoComplete, Background, Border, CommonComponentProps, Cursor, DepthShadow, Events, InputType, Size, Validation, Visibility } from '../../../../types';
import { TextProps } from '../../../typography/Text';
export declare type InputProps<V> = CommonComponentProps & TextProps & Events<V> & {
    readonly autoComplete?: AutoComplete;
    readonly background?: Background;
    readonly border?: Border;
    readonly defaultValue?: V;
    readonly cursor?: Cursor;
    readonly events?: Events<V>;
    readonly label?: string;
    readonly max?: number;
    readonly maxLength?: number;
    readonly min?: number;
    readonly name?: string;
    readonly placeholder?: string;
    readonly prefix?: string;
    readonly size?: Size;
    readonly shadow?: DepthShadow;
    readonly spellCheck?: boolean;
    readonly submitOnEnter?: boolean;
    readonly suffix?: string;
    readonly type?: InputType | string;
    readonly validation?: Validation;
    readonly value?: V;
    readonly visibility?: Visibility;
};
export declare const Input: import("react").MemoExoticComponent<({ autoComplete, background, border, className, cursor, defaultValue, events, lineHeight, max, maxLength, min, name, prefix, placeholder, size, states, suffix, textAlign, textSize, textColor, textWeight, type, ...props }: InputProps<((string | number | readonly string[]) & string) | undefined>) => ReactElement>;
//# sourceMappingURL=Input.d.ts.map