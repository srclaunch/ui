import { ReactElement } from 'react';
import { Color } from '../../../types';
import { CurrencyCode } from '@srclaunch/types';
declare type ProgressivePaymentStatusProps = {
    amountPaid: number;
    currency?: CurrencyCode;
    color?: Color;
    totalDue: number;
};
export declare const ProgressivePaymentStatus: import("react").MemoExoticComponent<({ amountPaid, currency, totalDue, }: ProgressivePaymentStatusProps) => ReactElement>;
export {};
//# sourceMappingURL=ProgressivePaymentStatus.d.ts.map