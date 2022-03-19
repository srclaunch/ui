import { Condition, SSN, ValidationProblem } from '@srclaunch/types';
import {
  // getValidationProblemLabel,
  validate,
} from '@srclaunch/validation';
import {
  createRef,
  memo,
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

import { FocusStyles } from '../../../../styles/container/focus';
import { TextStyles } from '../../../../styles/typography';
import {
  AlignHorizontal,
  Alignment,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Cursor,
  DepthShadow,
  InputProps,
  Orientation,
  Sizes,
  TextAlign,
  TextColors,
  TextSize,
  TextWeight,
} from '../../../../types';
import { ErrorLabel } from '../../../errors/ErrorLabel';
import { Container } from '../../../layout/Container';
import { Icon } from '../../../media/Icon';
import { ProgressSpinner } from '../../../progress/ProgressSpinner';
import { Label } from '../../../typography/Label';
import { InputLabel } from '../../labels/InputLabel';
import { InputContainer, InputContainerProps } from '../shared/InputContainer';
import { TextProps } from '../../../typography/Text';

export type SSNInputProps = InputProps<SSN> &
  InputContainerProps &
  TextProps & {
    readonly icon?: typeof Icon;
  };

export const SSNInput = memo(
  ({
    as,
    background = {},
    border = {},
    className = '',
    cursor = Cursor.Text,
    defaultValue,
    events = {},
    icon,
    label,
    name,
    placeholder = '',
    shadow = DepthShadow.Low,
    states = {},
    textSize = TextSize.Default,
    textColor = TextColors.InputControl,
    textWeight = TextWeight.Default,
    validation = { conditions: { [Condition.IsSSN]: true } },
    ...props
  }: SSNInputProps): ReactElement => {
    const [value, setValue] = useState<number[]>(
      defaultValue
        ? [
            Number.parseInt(defaultValue?.toString().slice(0, 3) || '000'),
            Number.parseInt(defaultValue?.toString().slice(3, 5) || '00'),
            Number.parseInt(defaultValue?.toString().slice(5) || '0000'),
          ]
        : [],
    );
    const [valueChanged, setValueChanged] = useState(false);
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState<ValidationProblem[]>([]);

    const firstInputRef = useRef<HTMLInputElement>();
    const secondInputRef = useRef<HTMLInputElement>();
    const thirdInputRef = useRef<HTMLInputElement>();

    useEffect(() => {
      setValueChanged(true);

      if (valueChanged) {
        if (validation && validation.conditions) {
          const probs = validate(value, validation.conditions);

          setProblems(probs);

          if (events.input?.onValueChange && value)
            events.input.onValueChange({
              validation: {
                problems: probs,
                validated: probs.length === 0,
              },
              value: Number.parseInt(value.join('')),
            });
        } else {
          if (events.input?.onValueChange && value)
            events.input.onValueChange({
              value: Number.parseInt(value.join('')),
            });
        }
      }
    }, [value]);

    return (
      <>
        <Container
          alignment={{
            orientation: Orientation.Horizontal,
          }}
        >
          {label && <InputLabel>{label}</InputLabel>}

          {problems.length > 0 ? (
            <ErrorLabel alignment={{ horizontal: AlignHorizontal.Right }}>
              {problems[0]?.message.short}
            </ErrorLabel>
          ) : null}
        </Container>

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
          cursor={cursor}
          className={`${className} ssn-input`}
          events={{
            mouse: {
              onClick: () => {
                if (!focused && firstInputRef.current) {
                  firstInputRef.current.focus();
                }
              },
            },
          }}
          padding={{
            left: Amount.Least,
            right: Amount.Least,
          }}
          shadow={shadow}
          states={{
            state: {
              error: problems,
              focused,
            },
          }}
          {...props}
        >
          {icon && <>{icon}</>}

          <Input
            // defaultValue={defaultValue}
            hidden={!states.state?.visible}
            max={999}
            min={100}
            name={name}
            onBlur={() => setFocused(false)}
            // @ts-ignore
            onChange={(e: any) => {
              setValueChanged(true);
              setValue([e.target.value, value[1], value[2]]);

              if (e.target.value.length === 3 && secondInputRef.current) {
                secondInputRef.current?.focus();
              }
            }}
            onFocus={() => setFocused(true)}
            placeholder="123"
            onKeyPress={(e: any) => {
              if (e.target.value.length === 3) {
                e.preventDefault();
              }
            }}
            // @ts-ignore
            ref={firstInputRef}
            textAlign={TextAlign.Center}
            textColor={textColor}
            type="number"
            // value={value[0]}
          />

          <Label textSize={TextSize.Larger}>-</Label>

          <Input
            // defaultValue={defaultValue}
            hidden={!states.state?.visible}
            max={99}
            min={1}
            name={name}
            onBlur={() => setFocused(false)}
            // @ts-ignore
            onChange={(e: any) => {
              setValueChanged(true);
              setValue([value[0], e.target.value, value[2]]);

              if (e.target.value.length === 2) {
                thirdInputRef.current?.focus();
              }
            }}
            onFocus={() => setFocused(true)}
            placeholder="45"
            onKeyPress={(e: any) => {
              if (e.target.value.length === 2) {
                e.preventDefault();
              }
            }}
            onKeyDown={(e: any) => {
              if (e.key === 'Backspace' && e.target.value.length === 0) {
                firstInputRef.current?.focus();
              }
            }}
            // @ts-ignore
            ref={secondInputRef}
            textAlign={TextAlign.Center}
            textColor={textColor}
            type="number"
            // value={value[1]}
          />

          <Label textSize={TextSize.Larger}>-</Label>

          <Input
            // defaultValue={defaultValue}
            hidden={!states.state?.visible}
            max={9999}
            min={1000}
            name={name}
            onBlur={() => setFocused(false)}
            onChange={(e: any) => {
              setValueChanged(true);
              setValue([value[0], value[1], e.target.value]);
            }}
            onFocus={() => setFocused(true)}
            placeholder="6789"
            onKeyPress={(e: any) => {
              if (e.target.value.length === 4) {
                e.preventDefault();
              }
            }}
            onKeyDown={(e: any) => {
              if (e.key === 'Backspace' && e.target.value.length === 0) {
                secondInputRef.current?.focus();
              }
            }}
            // @ts-ignore
            ref={thirdInputRef}
            textAlign={TextAlign.Center}
            textColor={textColor}
            type="number"
            // value={value[2]}
          />

          {states.state?.loading && (
            <ProgressSpinner
              size={{
                height: Sizes.Small,
                width: Sizes.Small,
              }}
            />
          )}
        </InputContainer>
      </>
    );
  },
);

// const Container = styled.div<LayoutProps<AppearanceProps<null>>>`
//   ${LayoutStyles};
//   ${AppearanceStyles};
//   ${ElementStyles};
//   ${InputStyles};
//   ${FocusedStyles};

//   cursor: text;
// `;

const Input = styled.input<SSNInputProps>`
  ${FocusStyles};
  ${TextStyles};

  background: transparent;
  border: none;
  outline: none;
  padding: 0 ${Amount.Least};
  -moz-appearance: textfield;

  &::placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-webkit-input-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-moz-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
