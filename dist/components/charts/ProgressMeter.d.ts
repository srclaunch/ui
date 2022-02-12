import { ReactElement } from 'react';
import { Color, ContainerProps, Size } from '../../types';
declare type ProgressMeterProps = {
    readonly amount?: number;
    readonly color?: Color;
    readonly label?: string;
    readonly size?: Size;
    readonly total?: number;
} & ContainerProps<HTMLDivElement>;
export declare const ProgressMeter: import("react").MemoExoticComponent<({ amount, borderRadius, children, color, height, label, margin, marginBottom, marginLeft, marginRight, marginTop, padding, total, ...props }: ProgressMeterProps) => ReactElement>;
export {};
//# sourceMappingURL=ProgressMeter.d.ts.map