import { ReactElement } from 'react';
import { CurrencyCode } from '@srclaunch/types';
import { Color } from '../../../types';
declare type ProgressivePaymentStatusProps = {
    amountPaid: number;
    currency?: CurrencyCode;
    color?: Color;
    totalDue: number;
};
export declare const ProgressivePaymentStatus: import("react").MemoExoticComponent<({ amountPaid, currency, totalDue, }: ProgressivePaymentStatusProps) => ReactElement>;
export {};
//# sourceMappingURL=ProgressivePaymentStatus.d.ts.map