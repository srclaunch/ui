import { ChangeEvent, memo, useEffect, useRef, useState } from 'react';
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

import { TextInput, TextInputProps } from '../text/TextInput';
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
    const [code, setCode] = useState<undefined | string>();
    const codePartsRef = useRef(codeParts);
    const [focusedKey, setFocusedKey] = useState<number | undefined>(undefined);

    useEffect(() => {
      setCode(Object.values(codeParts).join(''));
    }, [codeParts]);

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

    console.log('coeParts', codeParts);
    console.log('code', code);

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
            <TextInput
              id={`${name}-verification-code-input-${key}`}
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

                        codePartsRef.current = obj;
                        setCodeParts(obj);
                      }
                    }
                  },
                  ...events.clipboard,
                },
                input: {
                  onChange: (e: ChangeEvent<HTMLInputElement>) => {
                    console.log('codePartsRef,', codePartsRef);
                    console.log('e', e);

                    // @ts-ignore
                    if (e.nativeEvent.inputType !== 'insertFromPaste') {
                      const currentCodePart = codePartsRef.current?.[key];

                      console.log('curentCodePart', currentCodePart);
                      if (
                        e.target.value.length === 1 ||
                        e.target.value.length === 0
                      ) {
                        codePartsRef.current = {
                          ...codePartsRef.current,
                          // @ts-ignore
                          [key]: e.target.value,
                        };

                        setCodeParts({
                          ...codePartsRef.current,
                          [key]: e.target.value,
                        });
                      } else {
                        codePartsRef.current = {
                          ...codePartsRef.current,
                          [key]: undefined,
                        };
                        setCodeParts({
                          ...codePartsRef.current,
                          [key]: undefined,
                        });
                      }

                      if (e.target.value.length === 1 && !currentCodePart) {
                        const nextElem = document.getElementById(
                          `${name}-verification-code-input-${key + 1}`,
                        );

                        if (nextElem) {
                          nextElem.focus();
                        }
                      }
                    }
                  },
                  onValueChange: ({ value }) => {
                    console.log('VALUE', value);
                  },
                },
                keyboard: {
                  onKeyPress: e => {
                    console.log('e', e);
                  },
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
                  ...events.keyboard,
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
                codePartsRef.current[key]
                  ? codePartsRef.current[key]
                  : undefined
              }
              // {...props}
            />
          );
        })}
      </Container>
    );
  },
);
