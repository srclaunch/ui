import { ValidationProblem } from '@srclaunch/types';
import {
  // getValidationProblemLabel,
  validate,
} from '@srclaunch/validation';
import { memo, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { TextStyles } from '../../../../styles/typography';
import {
  AlignHorizontal,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Cursor,
  DepthShadow,
  InputProps,
  Orientation,
  Sizes,
  TextColor,
  TextColors,
  TextSize,
  TextWeight,
} from '../../../../types';
import { ErrorLabel } from '../../../errors/ErrorLabel';
import { Container } from '../../../layout/Container';
import { Icon } from '../../../media/Icon';
import { ProgressSpinner } from '../../../progress/ProgressSpinner';
import { InputLabel } from '../../labels/InputLabel';
import { InputContainer, InputContainerProps } from '../shared/InputContainer';
import { Text, TextProps } from '../../../typography/Text';

export type NumberInputProps = InputContainerProps &
  InputProps<number> &
  TextProps & {
    readonly icon?: typeof Icon;
    readonly placeholderTextColor?: TextColor;
    readonly prefix?: string;
    readonly spellCheck?: boolean;
    readonly suffix?: string;
  };

export const NumberInput = memo(
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
    prefix = '',
    shadow = DepthShadow.Low,
    textSize = TextSize.Default,
    states = {},
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

      if (events.input?.onValueChange && valueChanged) {
        if (validation && validation.conditions) {
          const probs = validate(value, validation.conditions);

          setProblems(probs);

          events.input.onValueChange({
            validation: {
              problems: probs,
              validated: probs.length === 0,
            },
            value,
          });
        } else {
          events.input.onValueChange({
            value,
          });
        }
      }
    }, [value]);

    return (
      <>
        <Container alignment={{ orientation: Orientation.Horizontal }}>
          {label && <InputLabel>{label}</InputLabel>}

          {problems.length > 0 ? (
            <ErrorLabel alignment={{ horizontal: AlignHorizontal.Right }}>
              {problems[0]?.message.short}
            </ErrorLabel>
          ) : null}
        </Container>

        <InputContainer
          alignment={{
            orientation: Orientation.Horizontal,
          }}
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
          className={`${className} number-input`}
          events={{
            mouse: {
              onClick: () => inputRef.current?.focus(),
            },
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
            defaultValue={defaultValue}
            events={{
              focus: {
                onBlur: () => setFocused(false),
                onFocus: () => setFocused(true),
              },
              input: {
                onChange: (e: any) => {
                  setValueChanged(true);
                  setValue(e.target.value);
                },
              },
            }}
            name={name}
            placeholder={placeholder}
            ref={inputRef}
            states={{
              state: {
                visible: !states.state?.visible,
              },
            }}
            textColor={textColor}
            type="number"
            value={value}
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

const Input = styled.input<NumberInputProps>`
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
