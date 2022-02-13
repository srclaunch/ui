import { ReactElement } from 'react';
import { Color, HeightProps, SizeProps, WidthProps } from '../../types';
import { ContainerProps } from '../layout/Container';
export declare type SvgProps = {
    readonly color?: Color;
    readonly path?: string;
    readonly url?: string;
} & ContainerProps<HTMLOrSVGElement> & HeightProps & WidthProps & SizeProps;
export declare const Svg: import("react").MemoExoticComponent<({ as, children, className, ...props }: SvgProps) => ReactElement>;
//# sourceMappingURL=Svg.d.ts.map