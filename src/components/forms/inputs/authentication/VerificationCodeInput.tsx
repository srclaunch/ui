import { Condition, ValidationProblem } from '@srclaunch/types';
import { validate } from '@srclaunch/validation';
import {
  ChangeEvent,
  memo,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';

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
import { Container, ContainerProps } from '../../../layout/Container';

export enum VerificationCodeType {
  Alpha = 'alpha',
  AlphaNumeric = 'alphanumeric',
  Numeric = 'numeric',
}

import { InputProps } from '../shared/Input';
import { TextInput } from '../text/TextInput';

type VerificationCodeInputProps = ContainerProps &
  InputProps<string> & {
    readonly length?: number;
    readonly codeType?: VerificationCodeType;
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
  }: VerificationCodeInputProps): ReactElement => {
    const [codeParts, setCodeParts] = useState<{
      [key: number]: string | undefined;
    }>({});
    const codePartsRef = useRef(codeParts);
    const [code, setCode] = useState<undefined | string>();
    const codeRef = useRef(code);

    useEffect(() => {
      codeRef.current = Object.values(codePartsRef.current).join('');
      setCode(codeRef.current);
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

      const probs = validate(codeRef, validation) as ValidationProblem[];

      if (events.input?.onValueChange)
        events.input?.onValueChange({
          validation: {
            problems: probs,
            validated: probs.length === 0,
          },
          value: codeRef.current,
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
        {Array.from(new Array(length)).map((_, key) => {
          return (
            <TextInput
              defaultValue={codeParts[key]}
              id={`${name}-verification-code-input-${key}`}
              events={{
                ...events,
                clipboard: {
                  ...events.clipboard,
                  onPaste: e => {
                    console.log('onPaste', e);

                    if (key === 0) {
                      const pastedText = e.clipboardData.getData('Text');

                      if (
                        pastedText &&
                        pastedText.length === length &&
                        !Number.isNaN(pastedText)
                      ) {
                        let obj = {};
                        let i = 0;

                        for (const val of pastedText) {
                          const prop = { [i]: val };

                          obj = { ...obj, ...prop };
                          i += 1;
                        }

                        codePartsRef.current = obj;
                        setCodeParts(obj);
                      }
                    }
                  },
                },
                input: {
                  onChange: (e: ChangeEvent<HTMLInputElement>) => {
                    // @ts-ignore
                    if (e.nativeEvent.inputType !== 'insertFromPaste') {
                      const currentCodePart = codePartsRef.current?.[key];

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
                },
                keyboard: {
                  ...events.keyboard,
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
              }}
              key={key}
              lineHeight={Sizes.Largest}
              margin={{
                left: Amount.Least,
                right: Amount.Least,
              }}
              max={9}
              maxLength={1}
              min={0}
              size={{ height: Sizes.Largest, width: Sizes.Largest }}
              textAlign={TextAlign.Center}
              textSize={TextSize.Larger}
            />
          );
        })}
      </Container>
    );
  },
);
