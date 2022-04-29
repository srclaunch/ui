import { ReactElement } from 'react';
import { Color } from '../../types';
import { ContainerProps } from '../layout/Container';
export declare type SvgProps = ContainerProps & {
    readonly color?: Color;
    readonly path?: string;
    readonly url?: string;
};
export declare const Svg: import("react").MemoExoticComponent<({ as, children, className, size, ...props }: SvgProps) => ReactElement>;
//# sourceMappingURL=Svg.d.ts.map