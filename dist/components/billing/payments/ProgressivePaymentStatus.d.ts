import { ReactElement } from 'react';
import { Color, DimensionProps } from '../../../types';
import { CurrencyCode } from '@srclaunch/types';
declare type ProgressivePaymentStatusProps = DimensionProps<{
    amountPaid: number;
    currency?: CurrencyCode;
    color?: Color;
    totalDue: number;
}>;
export declare const ProgressivePaymentStatus: import("react").MemoExoticComponent<({ amountPaid, currency, totalDue, size, }: ProgressivePaymentStatusProps) => ReactElement>;
export {};
//# sourceMappingURL=ProgressivePaymentStatus.d.ts.map