import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Condition, VerificationCode } from '@srclaunch/types';
import { validate } from '@srclaunch/validation';

import { Container } from '../../../layout/Container';
import { InputContainer } from '../shared/InputContainer';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColors,
  Orientation,
  TextColors,
  TextSize,
} from '../../../../types';

export enum VerificationCodeType {
  Alpha = 'alpha',
  AlphaNumeric = 'alphanumeric',
  Numeric = 'numeric',
}

import { TextInputProps } from '../text/TextInput';
import { TextInputStyles } from '../../../../styles/forms/input/text-input';

type VerificationCodeInputProps = {
  length?: number;
  codeType?: VerificationCodeType;
} & TextInputProps<VerificationCode>;

export const VerificationCodeInput = memo(
  ({
    as,
    className = '',
    defaultValue,
    hidden = false,
    length = 4,
    name,
    onChange,
    onKeyPress,
    placeholder = '',
    textSize = TextSize.Larger,
    textColor = TextColors.Dark,
    codeType = VerificationCodeType.Numeric,
    ...props
  }: VerificationCodeInputProps): React.ReactElement => {
    const [codeParts, setCodeParts] = useState<{
      [key: number]: string | undefined;
    }>({});
    const [focusedKey, setFocusedKey] = useState<number | undefined>(undefined);
    const code = Object.values(codeParts).join('');

    useEffect(() => {
      const typeCondition = () => {
        if (codeType === VerificationCodeType.Alpha) {
          return {
            [Condition.IsAlpha]: true,
          };
        }

        if (codeType === VerificationCodeType.AlphaNumeric) {
          return {
            [Condition.IsAlphanumeric]: true,
          };
        }

        return {
          [Condition.IsNumber]: true,
        };
      };

      const validation = {
        [Condition.IsRequired]: true,
        [Condition.IsLengthEqual]: length,
        ...typeCondition,
      };

      const probs = validate(code, validation);

      if (onChange)
        onChange({
          problems: probs,
          validated: !probs.length,
          value: code as VerificationCodeType,
        });
    }, [code]);

    return (
      <Container
        alignment={{
          horizontal: AlignHorizontal.Center,
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
        }}
      >
        {Array.from(Array(length)).map((_, key) => {
          return (
            <InputContainer
              background={{
                color: BackgroundColors.InputControl,
              }}
              focused={focusedKey === key}
              className={`${className} verification-code-input`}
              key={key}
              margin={{
                left: Amount.Less,
                right: Amount.Less,
              }}
            >
              <Input
                id={`${name}-verification-code-input-${key}`}
                max={codeType === VerificationCodeType.Numeric ? 9 : 'unset'}
                min={codeType === VerificationCodeType.Numeric ? 0 : 'unset'}
                name={name}
                onBlur={() => setFocusedKey(undefined)}
                // @ts-ignore
                onChange={e => {
                  // @ts-ignore
                  if (e.nativeEvent.inputType !== 'insertFromPaste') {
                    const currentCodePart = codeParts?.[key];

                    if (
                      // @ts-ignore
                      e.target.value.length === 1 ||
                      // @ts-ignore
                      e.target.value.length === 0
                    ) {
                      // @ts-ignore
                      setCodeParts({ ...codeParts, [key]: e.target.value });
                    } else {
                      setCodeParts({ ...codeParts, [key]: undefined });
                    }

                    if (
                      // @ts-ignore
                      e.target.value.length === 1 &&
                      !currentCodePart
                    ) {
                      const nextElem = document.getElementById(
                        `${name}-verification-code-input-${key + 1}`,
                      );

                      if (nextElem) {
                        nextElem.focus();
                      }
                    }
                  }
                }}
                onFocus={() => {
                  setFocusedKey(key);
                }}
                // @ts-ignore
                onKeyDown={e => {
                  if (
                    e.key === 'Delete' ||
                    // @ts-ignore
                    (e.key === 'Backspace' && !e.target.value)
                  ) {
                    const lastElem = document.getElementById(
                      `${name}-verification-code-input-${key - 1}`,
                    );

                    if (lastElem) {
                      lastElem.focus();
                    }
                  }
                }}
                // @ts-ignore
                onPaste={e => {
                  if (key === 0) {
                    const pastedText = e.clipboardData.getData('Text');

                    if (
                      pastedText &&
                      pastedText.length === length &&
                      !Number.isNaN(pastedText)
                    ) {
                      let obj = {};
                      let i = 0;
                      for (const val of [...pastedText]) {
                        const prop = { [i]: val };

                        obj = { ...obj, ...prop };
                        i += 1;
                      }

                      setCodeParts(obj);
                    }
                  }
                }}
                placeholder={placeholder}
                textColor={textColor}
                type={
                  codeType === VerificationCodeType.Numeric ? 'number' : 'text'
                }
                value={codeParts?.[key] ?? ''}
              />
            </InputContainer>
          );
        })}
      </Container>
    );
  },
);

const Input = styled.input<TextInputProps>`
  ${TextInputStyles};

  background: transparent;
  border: none;
  padding: calc(${props => props.size} / 5);
  text-align: center;
  width: 100%;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
