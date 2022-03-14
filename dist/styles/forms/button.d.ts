/// <reference types="react" />
import { Size, TextColor } from '../../types';
import { ContainerProps } from '../../components/layout/Container';
import { TextProps } from '../../components/typography/Text';
export declare const ButtonStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    size?: Size | undefined;
    textColor?: TextColor | undefined;
} & {
    alignment?: import("../../types").Alignment | undefined;
    animation?: import("../../types").ContainerAnimation | undefined;
    background?: import("../../types").Background | undefined;
    border?: import("../../types").Border | undefined;
    borderRadius?: import("../../types").BorderRadius | undefined;
    cursor?: import("../../types").Cursor | undefined;
    depth?: import("../../types").Depth | undefined;
    disabled?: boolean | undefined;
    margin?: import("../../types").Margin | undefined;
    opacity?: number | undefined;
    padding?: import("../../types").Padding | undefined;
    position?: import("../../types").Position | undefined;
    shadow?: import("../../types").DepthShadow | import("../../types").Shadow | undefined;
    size?: Size | undefined;
    visible?: boolean | undefined;
} & {
    children?: import("react").ReactNode;
} & {
    readonly active?: ContainerProps<HTMLDivElement> | undefined;
    readonly disable?: ContainerProps<HTMLDivElement> | undefined;
    readonly hover?: ContainerProps<HTMLDivElement> | undefined;
    readonly focus?: ContainerProps<HTMLDivElement> | undefined;
} & {
    readonly as?: string | import("react").ComponentType<any> | undefined;
    readonly className?: string | undefined;
    readonly form?: string | undefined;
    readonly id?: string | undefined;
    readonly name?: string | undefined;
    readonly style?: import("react").CSSProperties | undefined;
} & import("../../types").KeyboardEventProps<any> & import("../../types").FocusEventProps<any> & import("../../types").MouseEventProps<any> & import("../../types").FocusProps & {
    readonly bold?: boolean | undefined;
    readonly cursor?: import("../../types").Cursor | undefined;
    readonly italic?: boolean | undefined;
    readonly lineHeight?: string | number | Size | undefined;
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
} & import("../../types").KeyboardEventProps<HTMLSpanElement> & import("../../types").FocusEventProps<HTMLSpanElement> & import("../../types").MouseEventProps<HTMLSpanElement> & {
    readonly focus?: TextProps<HTMLSpanElement> | undefined;
    readonly hover?: TextProps<HTMLSpanElement> | undefined;
    readonly active?: TextProps<HTMLSpanElement> | undefined;
}, any>>;
//# sourceMappingURL=button.d.ts.map