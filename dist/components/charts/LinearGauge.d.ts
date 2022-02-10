import { ReactElement } from 'react';
import { Color, Size } from '../../types';
import { FormatterProps } from '../../lib/data/format';
declare type LinearGaugeProps = {
    amount: number;
    color: Color;
    formatter?: FormatterProps;
    label?: string;
    showTicks?: boolean;
    showTickLabels?: boolean;
    showValue?: boolean;
    size?: Size;
    tickCount?: number;
    total: number;
};
export declare const LinearGauge: import("react").MemoExoticComponent<({ amount, color, formatter, showTicks, showTickLabels, showValue, tickCount, total, }: LinearGaugeProps) => ReactElement>;
export {};
//# sourceMappingURL=LinearGauge.d.ts.map