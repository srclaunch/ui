/// <reference types="react" />
import { SimpleInterpolation } from 'styled-components';
import { ContainerProps } from '../../components/layout/Container';
import { TextProps } from '../../components/typography/Text';
export declare function getDisabledStateStyles(): SimpleInterpolation;
export declare function getContainerStatesStyles(props: ContainerProps & TextProps): SimpleInterpolation;
export declare const StateStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<import("../..").CommonComponentProps & {
    readonly alignment?: import("../..").Alignment | undefined;
    readonly animations?: import("../..").Animation[] | undefined;
    readonly background?: import("../..").Background | undefined;
    readonly border?: import("../..").Border | undefined;
    readonly borderRadius?: import("../..").BorderRadius | undefined;
    readonly cursor?: import("../..").Cursor | undefined;
    readonly depth?: import("../..").Depth | undefined;
    readonly events?: import("../..").Events<undefined> | undefined;
    readonly margin?: import("../..").Margin | undefined;
    readonly padding?: import("../..").Padding | undefined;
    readonly position?: import("../..").Position | undefined;
    readonly shadow?: import("../..").DepthShadow | import("../..").Shadow | undefined;
    readonly size?: import("../..").Size | undefined;
    readonly transform?: import("../../types/appearance/animation").Transform | undefined;
    readonly visibility?: import("../..").Visibility | undefined;
    readonly states?: import("../..").States<ContainerProps> | undefined;
} & {
    children?: import("react").ReactNode;
} & {
    readonly bold?: boolean | undefined;
    readonly cursor?: import("../..").Cursor | undefined;
    readonly italic?: boolean | undefined;
    readonly lineHeight?: string | number | undefined;
    readonly lineWrap?: boolean | undefined;
    readonly textOverflow?: string | undefined;
    readonly selectable?: boolean | undefined;
    readonly textAlign?: string | undefined;
    readonly textColor?: import("../..").TextColor | undefined;
    readonly textDecoration?: {
        readonly color?: import("../..").TextColor | undefined;
        readonly line?: import("../..").TextDecorationLine | import("../..").TextDecorationLine[] | undefined;
        readonly style?: import("../..").TextDecorationStyle | undefined;
        readonly thickness?: number | import("../..").Amount | undefined;
    } | undefined;
    readonly textSize?: string | number | undefined;
    readonly textWeight?: string | undefined;
} & {
    readonly states?: import("../..").States<TextProps> | undefined;
}, any>>;
//# sourceMappingURL=states.d.ts.map