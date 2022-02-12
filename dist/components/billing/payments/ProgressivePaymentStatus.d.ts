import { ReactElement } from 'react';
import { Color, SizeProps } from '../../../types';
import { CurrencyCode } from '@srclaunch/types';
declare type ProgressivePaymentStatusProps = {
    amountPaid: number;
    currency?: CurrencyCode;
    color?: Color;
    totalDue: number;
} & SizeProps;
export declare const ProgressivePaymentStatus: import("react").MemoExoticComponent<({ amountPaid, currency, totalDue, size, }: ProgressivePaymentStatusProps) => ReactElement>;
export {};
//# sourceMappingURL=ProgressivePaymentStatus.d.ts.map