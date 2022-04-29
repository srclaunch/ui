import { ReactElement } from 'react';
import { CurrencyAmount, CurrencyCode } from '@srclaunch/types';
import { LabelProps } from '../../../../typography/Label';
declare type CurrencyAmountLabelProps = LabelProps & {
    amount: CurrencyAmount;
    currency: CurrencyCode;
};
export declare const CurrencyAmountLabel: import("react").MemoExoticComponent<({ amount, currency, ...props }: CurrencyAmountLabelProps) => ReactElement>;
export {};
//# sourceMappingURL=CurrencyAmountLabel.d.ts.map