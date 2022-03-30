import { ReactElement } from 'react';
import { FormatterProps } from '../../lib/data/format';
import { Size } from '../../types';
declare type LinearGaugeProps = {
    readonly amount: number;
    readonly formatter?: FormatterProps;
    readonly label?: string;
    readonly showTicks?: boolean;
    readonly showTickLabels?: boolean;
    readonly showValue?: boolean;
    readonly size?: Size;
    readonly tickCount?: number;
    readonly total: number;
};
export declare const LinearGauge: import("react").MemoExoticComponent<({ amount, formatter, showTicks, showTickLabels, showValue, tickCount, total, }: LinearGaugeProps) => ReactElement>;
export {};
//# sourceMappingURL=LinearGauge.d.ts.map