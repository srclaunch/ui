/// <reference types="react" />
import { Size, TextColor } from '../../types';
import { ContainerProps } from '../../components/layout/Container';
import { TextProps } from '../../components/typography/Text';
export declare const ButtonStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    size?: Size | undefined;
    textColor?: TextColor | undefined;
} & import("../../types").CommonComponentProps & {
    readonly alignment?: import("../../types").Alignment | undefined;
    readonly animations?: import("../../types").Animation[] | undefined;
    readonly background?: import("../../types").Background | undefined;
    readonly border?: import("../../types").Border | undefined;
    readonly borderRadius?: import("../../types").BorderRadius | undefined;
    readonly cursor?: import("../../types").Cursor | undefined;
    readonly depth?: import("../../types").Depth | undefined;
    readonly events?: import("../../types").Events<undefined> | undefined;
    readonly margin?: import("../../types").Margin | undefined;
    readonly padding?: import("../../types").Padding | undefined;
    readonly position?: import("../../types").Position | undefined;
    readonly shadow?: import("../../types").DepthShadow | import("../../types").Shadow | undefined;
    readonly size?: Size | undefined;
    readonly transform?: import("../../types").Transform | undefined;
    readonly visibility?: import("../../types").Visibility | undefined;
    readonly states?: import("../../types").States<ContainerProps> | undefined;
} & {
    children?: import("react").ReactNode;
} & {
    readonly bold?: boolean | undefined;
    readonly cursor?: import("../../types").Cursor | undefined;
    readonly italic?: boolean | undefined;
    readonly lineHeight?: string | number | undefined;
    readonly lineWrap?: boolean | undefined;
    readonly textOverflow?: string | undefined;
    readonly selectable?: boolean | undefined;
    readonly textAlign?: string | undefined;
    readonly textColor?: TextColor | undefined;
    readonly textDecoration?: {
        readonly color?: TextColor | undefined;
        readonly line?: import("../../types").TextDecorationLine | import("../../types").TextDecorationLine[] | undefined;
        readonly style?: import("../../types").TextDecorationStyle | undefined;
        readonly thickness?: number | import("../../types").Amount | undefined;
    } | undefined;
    readonly textSize?: string | number | undefined;
    readonly textWeight?: string | undefined;
} & {
    readonly states?: import("../../types").States<TextProps> | undefined;
}, any>>;
//# sourceMappingURL=button.d.ts.map