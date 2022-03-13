import { LongText, ValidationProblem } from '@srclaunch/types';
import { validate } from '@srclaunch/validation';
import { memo, ReactElement, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { TextStyles } from '../../../../styles/typography';
import {
  AlignHorizontal,
  Alignment,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Color,
  Depth,
  DepthShadow,
  InputProps,
  InputValueChangeHandler,
  Orientation,
  Size,
  TextColors,
} from '../../../../types';
import { ErrorLabel } from '../../../errors/ErrorLabel';
import { Container } from '../../../layout/Container';
import { Icon } from '../../../media/Icon';
import { ProgressSpinner } from '../../../progress/ProgressSpinner';
import { InputLabel } from '../../labels/InputLabel';
import { InputContainer, InputContainerProps } from '../shared/InputContainer';
import { TextInputProps } from './TextInput';
import { TextProps } from '../../../typography/Text';

export type LongTextInputProps<V = LongText> = {
  readonly spellCheck?: boolean;
} & InputProps<HTMLTextAreaElement, V> &
  InputContainerProps &
  TextProps;

export const LongTextInput = memo(
  ({
    background = {},
    border = {},
    className = '',
    defaultValue,
    error,
    hidden = false,
    inProgress = false,
    label,
    lineHeight = Amount.More,
    name,
    onChange,
    placeholder = '',
    // size = Size.Default,
    shadow = DepthShadow.Low,
    spellCheck = true,
    textColor = TextColors.InputControl,
    validation = {},
  }: LongTextInputProps): ReactElement => {
    const [value, setValue] = useState(defaultValue ?? '');
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState<ValidationProblem[]>([]);
    const [valueChanged, setValueChanged] = useState(false);
    const inputRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
      if (validation && valueChanged) {
        const probs = validate(value, validation);

        setProblems(probs);

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
        <Container alignment={{ orientation: Orientation.Horizontal }}>
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
          className={`${className} text-input`}
          error={problems}
          focused={focused}
          // height={size}
          onClick={() => {
            inputRef.current?.focus();
          }}
          padding={{
            bottom: Amount.Least,
            left: Amount.Less,
            right: Amount.Less,
            top: Amount.Least,
          }}
          shadow={shadow}
          // size={size}
        >
          <Input
            hidden={hidden}
            name={name}
            onBlur={() => setFocused(false)}
            onChange={(e: any) => {
              setValueChanged(true);

              // @ts-ignore
              setValue(prefix + e.target.value + suffix);
            }}
            onFocus={() => setFocused(true)}
            placeholder={placeholder}
            ref={inputRef}
            lineHeight={lineHeight}
            textColor={textColor}
            value={value}
            spellCheck={spellCheck}
          />

          {inProgress && (
            <ProgressSpinner
            // size={Size.Small}
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

const Input = styled.textarea<LongTextInputProps>`
  ${TextStyles};

  background: transparent;
  border: none;
  width: 100%;

  // &::placeholder,
  // &::-webkit-input-placeholder,
  // &::-moz-placeholder {
  //   );
  // }

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
