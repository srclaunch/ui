import { ReactElement } from 'react';
import { Color, Size } from '../../types';
import { ContainerProps } from '../layout/Container';
declare type ProgressMeterProps = ContainerProps & {
    readonly amount?: number;
    readonly color?: Color;
    readonly label?: string;
    readonly size?: Size;
    readonly total?: number;
};
export declare const ProgressMeter: import("react").MemoExoticComponent<({ amount, background, borderRadius, children, label, size, total, ...props }: ProgressMeterProps) => ReactElement>;
export {};
//# sourceMappingURL=ProgressMeter.d.ts.map