import { ReactElement } from 'react';
import { Color, CommonComponentProps, HeightProps, SizeProps, WidthProps } from '../../types';
export declare type SvgProps = {
    readonly color?: Color;
    readonly path?: string;
    readonly url?: string;
} & CommonComponentProps<HTMLOrSVGElement> & HeightProps & WidthProps & SizeProps;
export declare const Svg: import("react").MemoExoticComponent<({ as, className, ...props }: SvgProps) => ReactElement>;
//# sourceMappingURL=Svg.d.ts.map