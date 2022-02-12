import { ReactElement } from 'react';
import { Color, SizeProps } from '../../types';
import { ContainerProps } from '../layout/Container';
declare type OrbProps = {
    readonly color?: Color;
} & ContainerProps<HTMLLabelElement> & SizeProps;
export declare const Orb: import("react").MemoExoticComponent<({ color, className, size, ...props }: OrbProps) => ReactElement>;
export {};
//# sourceMappingURL=Orb.d.ts.map