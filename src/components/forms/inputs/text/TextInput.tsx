import { ValidationProblem } from '@srclaunch/types';
import { validate } from '@srclaunch/validation';
import { memo, ReactElement, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { TextInputStyles } from '../../../../styles/forms/input/text-input';
import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Cursor,
  DepthShadow,
  InputProps,
  Sizes,
  TextColors,
  TextWeight,
} from '../../../../types';
import { Container } from '../../../layout/Container';
import { Icon, IconProps } from '../../../media/Icon';
import { ProgressSpinner } from '../../../progress/ProgressSpinner';
import { InputLabel } from '../../labels/InputLabel';
import { InputContainer, InputContainerProps } from '../shared/InputContainer';
import { Text, TextProps } from '../../../typography/Text';

export enum TextInputType {
  EmailAddress = 'email',
  Text = 'text',
  Password = 'password',
  Search = 'search',
}

export type TextInputProps = InputContainerProps &
  InputProps<string> &
  TextProps & {
    readonly icon?: IconProps;
    readonly inputType?: TextInputType;
    readonly prefix?: string;
    readonly spellCheck?: boolean;
    readonly suffix?: string;
  };

export const TextInput = memo(
  ({
    autoComplete,
    background = {},
    border = {},
    className = '',
    cursor = Cursor.Text,
    defaultValue,
    events = {},
    icon,
    inputType = TextInputType.Text,
    label,
    lineHeight = Sizes.Default,
    name,
    prefix = '',
    placeholder = '',
    shadow = DepthShadow.Low,
    spellCheck = true,
    states = {},
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
      if (valueChanged) {
        if (validation?.conditions) {
          const probs = validate(value, validation?.conditions);

          setProblems(probs && probs.length > 0 ? probs : undefined);

          if (events.input?.onValueChange)
            events.input?.onValueChange({
              validation: {
                problems: probs,
                validated: probs.length === 0,
              },
              value,
            });
        } else {
          if (events.input?.onValueChange)
            events.input?.onValueChange({
              value,
            });
        }
      }
    }, [value]);

    useEffect(() => {
      setValue(defaultValue ?? value ?? '');
    }, [defaultValue]);

    return (
      <>
        {(label || problems) && (
          <InputLabel
            states={{
              state: {
                error: problems,
              },
            }}
          >
            {label}
          </InputLabel>
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
          className={`${className} text-input`}
          cursor={cursor}
          events={{
            mouse: {
              onClick: () => () => {
                inputRef.current?.focus();
              },
            },
          }}
          states={{
            state: {
              error: problems,
              focused,
            },
          }}
          shadow={shadow}
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
              margin={{
                left: Amount.Less,
              }}
            />
          )}

          <Input
            autoComplete={autoComplete}
            defaultValue={defaultValue}
            lineHeight={lineHeight}
            name={name}
            onBlur={() => setFocused(false)}
            onChange={(e: any) => {
              setValueChanged(true);
              setValue(prefix + e.target.value + suffix);
            }}
            onFocus={() => setFocused(true)}
            placeholder={placeholder}
            textColor={textColor}
            textWeight={textWeight}
            type={inputType}
            value={value}
            ref={inputRef}
            spellCheck={spellCheck}
            states={states}
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
