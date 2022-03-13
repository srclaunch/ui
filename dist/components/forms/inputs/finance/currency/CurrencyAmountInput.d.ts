import { Condition, CurrencyAmount } from '@srclaunch/types';
import { ReactElement } from 'react';
import { InputProps } from '../../../../../types';
import { InputContainerProps } from '../../shared/InputContainer';
import { TextProps } from '../../../../typography/Text';
declare type CurrencyAmountInputProps = InputContainerProps & InputProps<HTMLInputElement, CurrencyAmount> & TextProps;
export declare const CurrencyAmountInput: import("react").MemoExoticComponent<({ background, border, className, defaultValue, label, name, onChange, shadow, textColor, textWeight, validation, }: CurrencyAmountInputProps) => ReactElement>;
export {};
//# sourceMappingURL=CurrencyAmountInput.d.ts.map