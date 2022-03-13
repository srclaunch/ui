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
  ClipboardEventProps,
  Cursor,
  CursorProps,
  DepthShadow,
  FocusEventProps,
  InputProps,
  InputValueChangeHandler,
  KeyboardEventProps,
  MouseEventProps,
  Orientation,
  Size,
  Sizes,
  TextAlign,
  TextColor,
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

export type SSNInputProps = {
  readonly icon?: typeof Icon;
} & InputProps<HTMLInputElement, SSN> &
  InputContainerProps &
  TextProps;

export const SSNInput = memo(
  ({
    as,
    background = {},

    border = {},
    className = '',
    cursor = Cursor.Text,
    defaultValue,
    error,
    hidden = false,
    icon,
    inProgress = false,
    label,
    name,
    onChange,
    onKeyPress,
    placeholder = '',
    shadow = DepthShadow.Low,
    textSize = TextSize.Default,
    textColor = TextColors.InputControl,
    textWeight = TextWeight.Default,
    validation = { [Condition.IsSSN]: true },
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
        const probs = validate(value, validation);

        setProblems(probs);

        if (onChange && value)
          onChange({
            problems: probs,
            validated: probs.length === 0,
            value: Number.parseInt(value.join('')),
          });
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
          error={problems}
          focused={focused}
          onClick={() => {
            if (!focused && firstInputRef.current) {
              firstInputRef.current.focus();
            }
          }}
          padding={{
            left: Amount.Least,
            right: Amount.Least,
          }}
          shadow={shadow}
          {...props}
        >
          {icon && <>{icon}</>}

          <Input
            // defaultValue={defaultValue}
            hidden={hidden}
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
            hidden={hidden}
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
            hidden={hidden}
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

          {inProgress && (
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
