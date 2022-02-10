import { Condition, CurrencyAmount, ValidationProblem } from '@srclaunch/types';
import { validate } from '@srclaunch/validation';
import { memo, ReactElement, useEffect, useRef, useState } from 'react';
import CurrencyInputField from 'react-currency-input-field';

import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  DepthShadow,
  InputProps,
  Size,
  TextColors,
  TextWeight,
} from '../../../../../types';
import { Label } from '../../../../typography/Label';
import { TextProps } from '../../../../typography/Text';
import { InputLabel } from '../../../labels/InputLabel';
import { InputContainer } from '../../shared/InputContainer';

type CurrencyAmountInputProps<
  E = HTMLInputElement,
  V = CurrencyAmount,
  P = Record<string, unknown>,
> = InputProps<E, V, TextProps<E>> & P;

export const CurrencyAmountInput = memo(
  ({
    backgroundColor = BackgroundColors.InputControl,
    boxShadow = DepthShadow.Low,
    border = {
      color: BorderColors.InputControl,
      style: BorderStyle.Solid,
      width: 1,
    },
    className = '',
    defaultValue,
    label,
    name,
    onChange,
    size = Size.Default,
    textColor = TextColors.InputControl,
    textWeight = TextWeight.Default,
    validation = { [Condition.IsCurrency]: true },
  }: CurrencyAmountInputProps): ReactElement => {
    const [value, setValue] = useState<number>(defaultValue ?? 0);
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState<ValidationProblem[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const [valueChanged, setValueChanged] = useState(false);

    useEffect(() => {
      if (validation && valueChanged) {
        const probs = validate(value, validation);

        setProblems(probs);

        if (onChange)
          onChange({
            problems: probs,
            validated: probs.length === 0,
            value,
          });
      } else {
        setProblems([]);

        if (onChange && value)
          onChange({
            problems: [],
            validated: true,
            value,
          });
      }
    }, [value]);

    return (
      <>
        {(label || problems.length > 0) && (
          <InputLabel errorMessage={problems[0]?.message.short}>
            {label}
          </InputLabel>
        )}

        <InputContainer
          backgroundColor={backgroundColor}
          border={border}
          boxShadow={boxShadow}
          className={`${className} currency-amount-input`}
          onClick={() => {
            if (inputRef.current) inputRef.current.focus();
          }}
          error={problems}
          focused={focused}
        >
          <Label
            marginLeft={Amount.Less}
            marginRight={Amount.Least}
            textColor={!value ? TextColors.InputPlaceholder : textColor}
          >
            $
          </Label>

          <CurrencyInputField
            className="currency-input"
            onBlur={() => setFocused(false)}
            onFocus={() => setFocused(true)}
            name={name}
            defaultValue={value ? Number(value).toFixed(2) : 0}
            // fixedDecimalLength={2}
            onValueChange={v => {
              setValueChanged(true);
              setValue(Number.parseInt(v ?? '0'));
            }}
            style={{
              backgroundColor: 'transparent',
              border: 'none',

              color: !value
                ? `rgb(${TextColors.InputPlaceholder})`
                : `rgb(${TextColors.InputControl})`,
              flexGrow: 1,
              fontWeight: textWeight,
              lineHeight: size,
            }}
          />
        </InputContainer>
      </>
    );
  },
);
