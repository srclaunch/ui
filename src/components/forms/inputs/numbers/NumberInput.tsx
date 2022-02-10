import { ValidationProblem } from '@srclaunch/types';
import {
  // getValidationProblemLabel,
  validate,
} from '@srclaunch/validation';
import { forwardRef, memo, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  Align,
  Amount,
  BackgroundColors,
  BackgroundProps,
  BorderColors,
  BorderProps,
  BorderStyle,
  ClipboardEventProps,
  Cursor,
  DepthShadow,
  FocusEventProps,
  InputProps,
  InputValueChangeHandler,
  Orientation,
  MouseEventProps,
  KeyboardEventProps,
  Size,
  SizeProps,
  TextColor,
  TextColors,
  TextWeight,
} from '../../../../types';

import { Icon } from '../../../media/Icon';
import { Container } from '../../../layout/Container';
import { ErrorLabel } from '../../../errors/ErrorLabel';
import { ProgressSpinner } from '../../../progress/ProgressSpinner';
import { InputContainer } from '../shared/InputContainer';
import { InputLabel } from '../../labels/InputLabel';
import { TextProps } from '../../../typography/Text';
import { FocusedStyles } from '../../../../styles/focused';
import { TextStyles } from '../../../../styles/typography';

export type NumberInputProps<
  E = HTMLInputElement,
  T = number,
  P = {},
> = InputProps<
  E,
  number,
  {
    icon?: typeof Icon;
    placeholderTextColor?: TextColor;
    prefix?: string;
    spellCheck?: boolean;
    suffix?: string;
  } & BackgroundProps &
    BorderProps &
    ClipboardEventProps<HTMLInputElement> &
    FocusEventProps<HTMLInputElement> &
    KeyboardEventProps<HTMLInputElement> &
    MouseEventProps<HTMLInputElement> &
    SizeProps &
    TextProps
> &
  P;

export const NumberInput = memo(
  ({
    as,
    backgroundColor = BackgroundColors.InputControl,
    boxShadow = DepthShadow.Low,
    border = {
      color: BorderColors.InputControl,
      style: BorderStyle.Solid,
      width: 1,
    },
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
    prefix = '',
    size = Size.Default,
    suffix = '',
    textColor = TextColors.InputControl,
    textWeight = TextWeight.Default,
    validation = {},
    ...props
  }: NumberInputProps): React.ReactElement => {
    const [value, setValue] = useState(defaultValue);
    const [valueChanged, setValueChanged] = useState(false);
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState<ValidationProblem[]>([]);

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      setValueChanged(true);

      if (valueChanged) {
        const probs = validate(value, validation);

        setProblems(probs);

        if (onChange && value)
          onChange({
            problems: probs,
            validated: !probs.length,
            value,
          });
      }
    }, [value]);

    return (
      <>
        <Container orientation={Orientation.Horizontal}>
          {label && <InputLabel>{label}</InputLabel>}

          {problems.length ? (
            <ErrorLabel alignContent={Align.Right}>
              {problems[0]?.message.short}
            </ErrorLabel>
          ) : null}
        </Container>

        <InputContainer
          backgroundColor={backgroundColor}
          border={border}
          boxShadow={boxShadow}
          cursor={cursor}
          className={`${className} number-input`}
          error={problems}
          focused={focused}
          onClick={() => {
            inputRef.current?.focus();
          }}
          orientation={Orientation.Horizontal}
          size={size}
          {...props}
        >
          {icon && <>{icon}</>}

          <Input
            defaultValue={defaultValue}
            hidden={hidden}
            name={name}
            onBlur={() => setFocused(false)}
            // @ts-ignore
            onChange={(e: any) => {
              setValueChanged(true);
              setValue(e.target.value);
            }}
            onFocus={() => setFocused(true)}
            lineHeight={size}
            placeholder={placeholder}
            onKeyPress={e => e.key}
            ref={inputRef}
            textColor={textColor}
            type="number"
            value={value}
          />

          {inProgress && (
            <Container grow={false}>
              <ProgressSpinner size={Size.Small} />
            </Container>
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

const Input = styled.input<NumberInputProps>`
  ${FocusedStyles};
  ${TextStyles};

  background: transparent;
  border: none;
  outline: none;
  padding: 0 ${Amount.Less};
  width: 100%;


  &::placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-webkit-input-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-moz-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }

  /* clears the ‘X’ from Internet Explorer */
  &::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  /* clears the ‘X’ from Chrome */
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;
