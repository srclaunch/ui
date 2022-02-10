import { ReactElement } from 'react';
import { CurrencyAmount, CurrencyCode } from '@srclaunch/types';
import { LabelProps } from '../../../../../types';
declare type CurrencyAmountLabelProps = LabelProps<HTMLLabelElement, {
    amount: CurrencyAmount;
    currency: CurrencyCode;
}>;
export declare const CurrencyAmountLabel: import("react").MemoExoticComponent<({ amount, currency, ...props }: CurrencyAmountLabelProps) => ReactElement>;
export {};
//# sourceMappingURL=CurrencyAmountLabel.d.ts.map