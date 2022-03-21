import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Condition } from '@srclaunch/types';
import { validate } from '@srclaunch/validation';
import { Container, ContainerProps } from '../../../layout/Container';
import { InputContainer } from '../shared/InputContainer';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColors,
  Orientation,
  Sizes,
  TextAlign,
  TextColors,
  TextSize,
} from '../../../../types';

export enum VerificationCodeType {
  Alpha = 'alpha',
  AlphaNumeric = 'alphanumeric',
  Numeric = 'numeric',
}

import { TextInputProps } from '../text/TextInput';
import { NumberInput } from '../numbers/NumberInput';
import { TextProps } from '../../../typography/Text';
import { InputProps } from '../shared/Input';

type VerificationCodeInputProps = ContainerProps &
  InputProps<string> & {
    length?: number;
    codeType?: VerificationCodeType;
  };

export const VerificationCodeInput = memo(
  ({
    as,
    className = '',
    defaultValue,
    events = {},
    length = 4,
    name,
    placeholder = '',
    states = {},
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

      if (events.input?.onValueChange)
        events.input?.onValueChange({
          validation: {
            problems: probs,
            validated: !probs.length,
          },
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
        className={`${className} verification-code-input`}
        {...props}
      >
        {Array.from(Array(length)).map((_, key) => {
          return (
            // <InputContainer
            //   background={{
            //     color: BackgroundColors.InputControl,
            //   }}
            //   className={`${className} verification-code-input`}
            //   key={key}
            //   states={{
            //     state: {
            //       focused: focusedKey === key,
            //     },
            //   }}
            // >
            <NumberInput
              events={{
                clipboard: {
                  onPaste: e => {
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
                  },
                },
                input: {
                  onChange: e => {
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
                  },
                },
                keyboard: {
                  onKeyDown: e => {
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
                  },
                },
                ...events,
              }}
              key={key}
              lineHeight={Sizes.Largest}
              margin={{
                left: Amount.Least,
                right: Amount.Least,
              }}
              // max={codeType === VerificationCodeType.Numeric ? 9 : 'unset'}
              // min={codeType === VerificationCodeType.Numeric ? 0 : 'unset'}
              max={9}
              maxLength={1}
              min={0}
              size={{ height: Sizes.Largest, width: Sizes.Largest }}
              textAlign={TextAlign.Center}
              textSize={TextSize.Larger}
              value={
                codeParts?.[key]
                  ? Number.parseInt(codeParts[key] as string)
                  : undefined
              }
            />
          );
        })}
      </Container>
    );
  },
);
