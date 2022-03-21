import { PropsWithChildren, ReactElement } from 'react';
import { Amount, CommonComponentProps, Cursor, States, TextAlign, TextColor, TextOverflow, TextSize, TextWeight } from '../../types';
import { TextDecorationLine, TextDecorationStyle } from '../../types/typography';
export declare type TextProps = PropsWithChildren<CommonComponentProps & {
    readonly bold?: boolean;
    readonly cursor?: Cursor;
    readonly italic?: boolean;
    readonly lineHeight?: string | number;
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
}> & {
    readonly states?: States<TextProps>;
};
export declare const Text: import("react").MemoExoticComponent<({ as, children, className, lineHeight, lineWrap, selectable, textAlign, textColor, textSize, textOverflow, textWeight, ...props }: TextProps) => ReactElement>;
//# sourceMappingURL=Text.d.ts.map