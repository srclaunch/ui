import { ReactElement } from 'react';
import { Align, Amount, Color, Overflow, Size, TextOverflow, TextSize, TextWeight, WhiteSpace } from '../../types';
import { ContainerProps } from '../layout/Container';
export declare type TextProps<E = HTMLSpanElement, P = {}> = ContainerProps<E, {
    focus?: TextProps;
    hover?: TextProps;
    active?: TextProps;
} & {
    alignText?: Align | string;
    inline?: boolean;
    lineHeight?: Amount | Size | string | number;
    overflow?: Overflow | string;
    selectable?: boolean;
    textColor?: Color | string;
    textOverflow?: TextOverflow | string;
    textSize?: TextSize | string | number;
    textWeight?: TextWeight | string;
    underline?: boolean;
    underlineColor?: Color | string;
    whiteSpace?: WhiteSpace | string;
    width?: Amount | Size | string | number;
}> & P;
export declare const Text: import("react").MemoExoticComponent<({ as, children, className, grow, inline, lineHeight, selectable, textColor, textSize, width, ...props }: TextProps) => ReactElement>;
//# sourceMappingURL=Text.d.ts.map