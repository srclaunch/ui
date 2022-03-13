import { ReactElement } from 'react';
import { CurrencyAmount, CurrencyCode } from '@srclaunch/types';
import { LabelProps } from '../../../../typography/Label';
declare type CurrencyAmountLabelProps = {
    amount: CurrencyAmount;
    currency: CurrencyCode;
} & LabelProps;
export declare const CurrencyAmountLabel: import("react").MemoExoticComponent<({ amount, currency, ...props }: CurrencyAmountLabelProps) => ReactElement>;
export {};
//# sourceMappingURL=CurrencyAmountLabel.d.ts.map