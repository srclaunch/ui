import { Condition, CurrencyAmount } from '@srclaunch/types';
import { ReactElement } from 'react';
import { InputProps } from '../../../../../types';
import { TextProps } from '../../../../typography/Text';
declare type CurrencyAmountInputProps<E = HTMLInputElement, V = CurrencyAmount, P = Record<string, unknown>> = InputProps<E, V, TextProps<E>> & P;
export declare const CurrencyAmountInput: import("react").MemoExoticComponent<({ backgroundColor, boxShadow, border, className, defaultValue, label, name, onChange, size, textColor, textWeight, validation, }: CurrencyAmountInputProps) => ReactElement>;
export {};
//# sourceMappingURL=CurrencyAmountInput.d.ts.map