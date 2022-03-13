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
import { InputLabel } from '../../../labels/InputLabel';
import {
  InputContainer,
  InputContainerProps,
} from '../../shared/InputContainer';
import { TextProps } from '../../../../typography/Text';
type CurrencyAmountInputProps = InputContainerProps &
  InputProps<HTMLInputElement, CurrencyAmount> &
  TextProps;

export const CurrencyAmountInput = memo(
  ({
    background = {},

    border = {},
    className = '',
    defaultValue,
    label,
    name,
    onChange,
    shadow = DepthShadow.Low,
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
          <InputLabel error={problems}>{label}</InputLabel>
        )}

        <InputContainer
          background={{ color: BackgroundColors.InputControl, ...background }}
          border={{
            all: {
              color: BorderColors.InputControl,
              style: BorderStyle.Solid,
              width: 1,
            },
            ...border,
          }}
          className={`${className} currency-amount-input`}
          onClick={() => {
            if (inputRef.current) inputRef.current.focus();
          }}
          error={problems}
          focused={focused}
          shadow={shadow}
        >
          <Label
            margin={{
              left: Amount.Less,
              right: Amount.Least,
            }}
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

              fontWeight: textWeight,
            }}
          />
        </InputContainer>
      </>
    );
  },
);
