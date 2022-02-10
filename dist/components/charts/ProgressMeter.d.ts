import { ReactElement } from 'react';
import { Color, ContainerProps, Size } from '../../types';
declare type ProgressMeterProps = ContainerProps<HTMLDivElement, {
    amount?: number;
    color?: Color;
    label?: string;
    size?: Size;
    total?: number;
}>;
export declare const ProgressMeter: import("react").MemoExoticComponent<({ amount, borderRadius, children, color, height, label, margin, marginBottom, marginLeft, marginRight, marginTop, padding, total, ...props }: ProgressMeterProps) => ReactElement>;
export {};
//# sourceMappingURL=ProgressMeter.d.ts.map