import { PropsWithChildren, ReactElement } from 'react';
import { Amount, CommonComponentProps, Cursor, Size, TextAlign, TextColor, TextOverflow, TextSize, TextWeight } from '../../types';
import { TextDecorationLine, TextDecorationStyle } from '../../types/typography/text';
export declare type TextProps<E = HTMLSpanElement> = PropsWithChildren<{
    readonly bold?: boolean;
    readonly cursor?: Cursor;
    readonly italic?: boolean;
    readonly lineHeight?: Size | string | number;
    readonly lineWrap?: boolean;
    readonly textOverflow?: TextOverflow | string;
    readonly selectable?: boolean;
    readonly textAlign?: TextAlign | string;
    readonly textColor?: TextColor;
    readonly textDecoration?: {
        readonly color?: TextColor | string;
        readonly line?: TextDecorationLine | TextDecorationLine[];
        readonly style?: TextDecorationStyle;
        readonly thickness?: Amount | number;
    };
    readonly textSize?: TextSize | string | number;
    readonly textWeight?: TextWeight | string;
}> & CommonComponentProps<E> & {
    readonly focus?: TextProps;
    readonly hover?: TextProps;
    readonly active?: TextProps;
};
export declare const Text: import("react").MemoExoticComponent<({ as, children, className, lineHeight, lineWrap, selectable, textAlign, textColor, textSize, textOverflow, textWeight, ...props }: TextProps) => ReactElement>;
//# sourceMappingURL=Text.d.ts.map