import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
declare type SvgProps<E = HTMLSpanElement, P = Record<string, unknown>> = ContainerProps<E, {
    readonly path?: string;
    readonly url?: string;
}> & P;
export declare const Svg: import("react").MemoExoticComponent<({ as, children, className, ...props }: SvgProps) => ReactElement>;
export {};
//# sourceMappingURL=Svg.d.ts.map