import { ValidationProblem } from '@srclaunch/types';
import { validate } from '@srclaunch/validation';
import { memo, ReactElement, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { TextInputStyles } from '../../../../styles/forms/input/text-input';
import {
  Amount,
  AppearanceProps,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  ClipboardEventProps,
  Cursor,
  DepthShadow,
  FocusEventProps,
  InputProps,
  KeyboardEventProps,
  MouseEventProps,
  Orientation,
  Size,
  TextColors,
  TextProps,
  TextWeight,
} from '../../../../types';
import { Container } from '../../../layout/Container';
import { Icon, IconProps } from '../../../media/Icon';
import { ProgressSpinner } from '../../../progress/ProgressSpinner';
import { InputLabel } from '../../labels/InputLabel';
import { InputContainer } from '../shared/InputContainer';

export enum TextInputType {
  EmailAddress = 'email',
  Text = 'text',
  Password = 'password',
  Search = 'search',
}

export type TextInputProps<V = string> = {
  readonly icon?: IconProps;
  readonly inputType?: TextInputType;
  readonly prefix?: string;
  readonly spellCheck?: boolean;
  readonly suffix?: string;
} & InputProps<HTMLInputElement, V> &
  AppearanceProps &
  TextProps;

export const TextInput = memo(
  ({
    autoComplete,
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
    flat = false,
    hidden = false,
    icon,
    inProgress = false,
    inputType = TextInputType.Text,
    label,
    name,
    onChange,
    prefix = '',
    placeholder = '',
    size = Size.Default,
    spellCheck = true,
    suffix = '',
    textColor = TextColors.InputControl,
    textWeight = TextWeight.Default,
    validation = {},
    ...props
  }: TextInputProps): ReactElement => {
    const [value, setValue] = useState(defaultValue ?? '');
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState<ValidationProblem[]>();
    const [valueChanged, setValueChanged] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (validation && valueChanged) {
        const probs = validate(value, validation);

        setProblems(probs && probs.length ? probs : undefined);

        if (onChange)
          onChange({
            problems: probs,
            validated: probs.length === 0,
            value,
          });
      } else {
        setProblems([]);

        if (onChange)
          onChange({
            problems: [],
            validated: true,
            value,
          });
      }
    }, [value]);

    useEffect(() => {
      setValue(defaultValue ?? value ?? '');
    }, [defaultValue]);

    return (
      <>
        {(label || problems) && (
          <InputLabel error={problems}>{label}</InputLabel>
        )}

        <InputContainer
          backgroundColor={backgroundColor}
          border={border}
          boxShadow={boxShadow}
          className={`${className} text-input`}
          cursor={cursor}
          error={problems}
          focused={focused}
          flat={flat}
          onClick={() => {
            inputRef.current?.focus();
          }}
          orientation={Orientation.Horizontal}
          size={size}
          {...props}
        >
          {icon && (
            <Icon
              {...icon}
              color={
                value === ''
                  ? TextColors.InputPlaceholder
                  : icon.color ?? textColor
              }
              marginLeft={Amount.Less}
            />
          )}

          <Input
            autoComplete={autoComplete}
            defaultValue={defaultValue}
            hidden={hidden}
            name={name}
            onBlur={() => setFocused(false)}
            onChange={(e: any) => {
              setValueChanged(true);
              setValue(prefix + e.target.value + suffix);
            }}
            onFocus={() => setFocused(true)}
            lineHeight={size}
            placeholder={placeholder}
            textColor={textColor}
            textWeight={textWeight}
            type={inputType}
            value={value}
            ref={inputRef}
            spellCheck={spellCheck}
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

const Input = styled.input<TextInputProps>`
  ${TextInputStyles};

  background: transparent;
  border: none;
  width: 100%;

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
