import { ValidationProblem } from '@srclaunch/types';
import { validate } from '@srclaunch/validation';
import { ChangeEvent } from 'react';
import { forwardRef } from 'react';
import {
  memo,
  ReactElement,
  ReactEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled, { css } from 'styled-components';
import { getEventHandlers } from '../../../../lib/events';
import { getInputStyles, InputStyles } from '../../../../styles/forms/input';
import {
  AutoComplete,
  Background,
  Border,
  CommonComponentProps,
  Cursor,
  DepthShadow,
  Events,
  InputType,
  Size,
  Sizes,
  TextAlign,
  TextColors,
  TextSize,
  TextWeight,
  Validation,
  Visibility,
} from '../../../../types';
import { TextProps } from '../../../typography/Text';

// type IsNumberInput<V> = V extends number ? {} : {};

export type InputProps<V> = CommonComponentProps &
  TextProps &
  Events<V> & {
    readonly autoComplete?: AutoComplete;
    readonly background?: Background;
    readonly border?: Border;
    readonly defaultValue?: V;
    readonly cursor?: Cursor;
    readonly events?: Events<V>;
    readonly label?: string;
    readonly max?: number;
    readonly maxLength?: number;
    readonly min?: number;
    readonly name?: string;
    readonly placeholder?: string;
    // readonly ref?: ForwardedRef<E>;
    readonly prefix?: string;
    readonly size?: Size;
    readonly shadow?: DepthShadow;
    readonly spellCheck?: boolean;
    readonly submitOnEnter?: boolean;
    readonly suffix?: string;
    readonly type?: InputType | string;
    readonly validation?: Validation;
    readonly value?: V;
    readonly visibility?: Visibility;
  };

// const Input2 = forwardRef(
//   (
//     {
//       autoComplete,
//       background = {},
//       border = {},
//       className = '',
//       cursor = Cursor.Text,
//       defaultValue,
//       events = {},
//       lineHeight = Sizes.Default,
//       name,
//       prefix = '',
//       placeholder = '',
//       size = {},
//       states = {},
//       suffix = '',
//       textColor = TextColors.InputControl,
//       textWeight = TextWeight.Default,
//       type,
//       ...props
//     },
//     ref,
//   ): ReactElement => <></>,
// );

export const Input = memo(
  ({
    autoComplete,
    background = {},
    border = {},
    className = '',
    cursor = Cursor.Text,
    defaultValue,
    events = {},
    lineHeight = Sizes.Default,
    max,
    maxLength,
    min,
    name,
    prefix = '',
    placeholder = '',
    size = {},
    states = {},
    suffix = '',
    textAlign = TextAlign.Left,
    textSize = TextSize.Default,
    textColor = TextColors.InputControl,
    textWeight = TextWeight.Default,
    type,
    ...props
  }: InputProps<
    ((string | number | readonly string[]) & string) | undefined
  >): ReactElement => {
    const [value, setValue] = useState(defaultValue);
    const [focused, setFocused] = useState(false);
    // const [problems, setProblems] = useState<ValidationProblem[]>();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [eventHandlers, setEventHandlers] = useState<{
      [key: string]: ReactEventHandler;
    }>({});

    useEffect(() => {
      if (events && Object.keys(events).length > 0) {
        setEventHandlers(getEventHandlers(events));
      }
    }, []);

    useEffect(() => {
      if (defaultValue !== value) {
        setValue(defaultValue);
      }
    }, [defaultValue]);

    useEffect(() => {
      if (events.input?.onValueChange)
        events.input.onValueChange({
          value,
        });
    }, [value]);

    return (
      <InputElement
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        className={`${className} input`}
        cursor={cursor}
        inputSize={size}
        lineHeight={lineHeight}
        max={max}
        maxLength={maxLength}
        min={min}
        name={name}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        placeholder={placeholder}
        textAlign={textAlign}
        textColor={textColor}
        textSize={textSize}
        textWeight={textWeight}
        // value={value}
        // ref={inputRef}
        states={{
          state: {
            error: states.state?.error,
            focused,
          },
          ...states,
        }}
        type={type}
        {...eventHandlers}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValue(prefix + e.target?.value + suffix);
          if (events.input?.onChange) {
            events.input.onChange(e);
          }
        }}
        // {...props}
      />
    );
  },
);

const InputElement = styled.input<InputProps<string> & { inputSize?: Size }>`
  ${props => getInputStyles(props)}
`;
