import { ValidationProblem } from '@srclaunch/types';
import { validate } from '@srclaunch/validation';
import {
  memo,
  ChangeEvent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

import { TextStyles } from '../../../../styles/typography';
import {
  AlignHorizontal,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  DepthShadow,
  Orientation,
  TextColors,
} from '../../../../types';
import { ErrorLabel } from '../../../errors/ErrorLabel';
import { Container } from '../../../layout/Container';
import { ProgressSpinner } from '../../../progress/ProgressSpinner';
import { InputLabel } from '../../labels/InputLabel';
import { InputContainer, InputContainerProps } from '../shared/InputContainer';

export type LongTextInputProps = InputContainerProps<string>;

export const LongTextInput = memo(
  ({
    background = {},
    border = {},
    className = '',
    defaultValue,
    events = {},
    label,
    lineHeight = Amount.More,
    name,
    placeholder = '',
    shadow = DepthShadow.Low,
    spellCheck = true,
    states = {},
    textColor = TextColors.InputControl,
    validation = {},
    ...props
  }: LongTextInputProps): ReactElement => {
    const [value, setValue] = useState(defaultValue ?? '');
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState<ValidationProblem[]>([]);
    const [valueChanged, setValueChanged] = useState(false);
    const inputRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
      if (valueChanged) {
        if (validation && validation.conditions) {
          const probs = validate(value, validation.conditions);

          setProblems(probs);

          if (events.input?.onValueChange)
            events.input.onValueChange({
              validation: {
                problems: probs,
                validated: probs.length === 0,
              },
              value,
            });
        } else {
          if (events.input?.onValueChange)
            events.input.onValueChange({
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
          events={{
            mouse: {
              onClick: () => {
                inputRef.current?.focus();
              },
            },
          }}
          // height={size}

          padding={{
            bottom: Amount.Least,
            left: Amount.Less,
            right: Amount.Less,
            top: Amount.Least,
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
          <Input
            name={name}
            onBlur={() => setFocused(false)}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setValueChanged(true);

              setValue(e.target.value);
            }}
            onFocus={() => setFocused(true)}
            placeholder={placeholder}
            ref={inputRef}
            lineHeight={lineHeight}
            states={{
              state: {
                visible: !states.state?.visible,
              },
            }}
            textColor={textColor}
            value={value}
            spellCheck={spellCheck}
          />

          {states.state?.loading && (
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
