import { ValidationProblem } from '@srclaunch/types';
import { validate } from '@srclaunch/validation';
import { memo, ReactElement, useEffect, useRef, useState } from 'react';

import {
  AlignVertical,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  DepthShadow,
  Orientation,
  Overflow,
  Sizes,
  TextAlign,
  TextColors,
  TextSize,
} from '../../../../types';
import { Container, ContainerProps } from '../../../layout/Container';
import { Icon, IconProps } from '../../../media/Icon';
import { ProgressSpinner } from '../../../progress/ProgressSpinner';
import { InputLabel } from '../../labels/InputLabel';
import { Input, InputProps } from './Input';

export type InputContainerProps<V> = ContainerProps &
  InputProps<V> & {
    readonly icon?: IconProps;
    readonly prefix?: string;
    readonly spellCheck?: boolean;
    readonly suffix?: string;
  };

export const InputContainer = memo(
  ({
    alignment = {},
    background = {},
    borderRadius = {},
    border = {},
    children,
    className = '',
    defaultValue,
    events = {},
    icon = {},
    label,
    lineHeight = Sizes.Default,
    max,
    maxLength,
    min,
    name,
    placeholder = '',
    shadow = DepthShadow.Low,
    states = {},
    textAlign = TextAlign.Left,
    textColor = TextColors.InputControl,
    textSize = TextSize.Default,
    type,
    validation = {},
    ...props
  }: InputContainerProps<any>): ReactElement => {
    const [value, setValue] = useState(defaultValue);
    const [valueChanged, setValueChanged] = useState(false);
    const [focused, setFocused] = useState(false);
    const focusedRef = useRef(focused);
    const [problems, setProblems] = useState<ValidationProblem[]>();
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (valueChanged && validation?.conditions) {
        const probs = validate(
          value,
          validation?.conditions,
        ) as ValidationProblem[];

        setProblems(probs && probs.length > 0 ? probs : undefined);

        if (events.input?.onValueChange)
          events.input?.onValueChange({
            validation: {
              problems: probs,
              validated: probs.length === 0,
            },
            value,
          });
      } else if (events.input?.onValueChange)
        events.input?.onValueChange({
          value,
        });
    }, [value]);

    return (
      <Container
        className={`${className} input-container`}
        events={{
          mouse: {
            onClick: e => () => {
              if (children) {
                inputRef.current?.focus();
              }

              if (events.mouse?.onClick) {
                events.mouse.onClick(e);
              }
            },
          },
          ...events,
        }}
      >
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

        <Container
          alignment={{
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Center,
            ...alignment,
          }}
          background={{
            color: BackgroundColors.InputControl,
            ...background,
          }}
          borderRadius={{ all: Amount.Least, ...borderRadius }}
          border={{
            all: {
              color:
                states.state?.error &&
                Array.isArray(states.state.error) &&
                states.state.error.length > 0
                  ? BorderColors.Error
                  : border?.all && typeof border?.all == 'object'
                  ? border.all.color
                  : BorderColors.InputControl,
              style: BorderStyle.Solid,
              width: 1,
            },
            ...border,
          }}
          className={`${className} input-container-wrapper`}
          shadow={shadow}
          states={{
            ...states,
            state: {
              ...states.state,
              error: problems,
              focused:
                states.state?.focused !== undefined
                  ? states.state.focused
                  : focusedRef.current,
            },
          }}
          {...props}
        >
          {icon && (
            <Icon
              color={
                value === '' || value === undefined
                  ? TextColors.InputPlaceholder
                  : icon.color ?? textColor
              }
              margin={{
                left: Amount.Less,
              }}
              {...icon}
            />
          )}

          {children ? (
            children
          ) : (
            <Input
              defaultValue={defaultValue}
              events={{
                focus: {
                  onBlur: e => {
                    focusedRef.current = false;
                    setFocused(false);

                    if (events.focus?.onBlur) {
                      events.focus.onBlur(e);
                    }
                  },
                  onFocus: e => {
                    focusedRef.current = true;
                    setFocused(true);

                    if (events.focus?.onFocus) {
                      events.focus.onFocus(e);
                    }
                  },
                },
                input: {
                  onChange: events.input?.onChange,
                  onValueChange: ({ value: val }) => {
                    setValueChanged(true);
                    setValue(val);

                    if (events.input?.onValueChange) {
                      events.input.onValueChange({
                        value: val,
                      });
                    }
                  },
                },
              }}
              max={max}
              maxLength={maxLength}
              min={min}
              placeholder={placeholder}
              textAlign={textAlign}
              textColor={textColor}
              textSize={textSize}
              type={type}
            />
          )}

          {states.state?.loading && (
            <ProgressSpinner
              size={{
                height: Sizes.Small,
                width: Sizes.Small,
              }}
            />
          )}
        </Container>
      </Container>
    );
  },
);
