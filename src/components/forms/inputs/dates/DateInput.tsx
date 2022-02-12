import { BasicIcons } from '@srclaunch/icons';
import { Condition, ISO8601String, ValidationProblem } from '@srclaunch/types';
import { validate } from '@srclaunch/validation';
import { memo, ReactElement, useEffect, useState } from 'react';
// import DatePickerC from 'react-date-picker';
// import css from 'react-date-picker/dist/DatePicker.css';
import styled, { css } from 'styled-components';

import { AppearanceStyles } from '../../../../styles/appearance';
import { BoxShadowStyles } from '../../../../styles/appearance/box-shadow';
import { DimensionStyles } from '../../../../styles/appearance/dimension';
import { FocusedStyles } from '../../../../styles/focused';
import { InputContainerStyles } from '../../../../styles/forms/input/container';
import { LayoutStyles } from '../../../../styles/layout';
import {
  Align,
  Amount,
  AppearanceProps,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Cursor,
  DepthShadow,
  ForegroundColors,
  InputProps,
  Orientation,
  Size,
  TextColors,
  TextProps,
  TextSize,
  TextWeight,
  TransformProps,
} from '../../../../types';
import { ContainerProps } from '../../../layout/Container';
import { Icon, IconProps } from '../../../media/Icon';
import { InputLabel } from '../../labels/InputLabel';
import { InputContainer } from '../shared/InputContainer';

export type DateInputProps = {
  readonly resetIcon?: IconProps;
} & AppearanceProps &
  InputProps<HTMLInputElement, ISO8601String> &
  TextProps;

const getBorderColor = ({
  focused,
  error,
}: {
  readonly focused?: boolean;
  readonly error?: readonly ValidationProblem[];
}) => {
  if (error && Array.isArray(error) && error.length > 0)
    return BorderColors.Error;

  if (focused) return BorderColors.Primary;

  return BorderColors.InputControl;
};

const Wrapper = styled.div<{
  readonly boxShadow?: DepthShadow;
  readonly error?: readonly ValidationProblem[];
  readonly focused?: boolean;
  readonly size: Size;
}>`
  background: transparent;
  border: none;
  width: 100%;
  ${BoxShadowStyles};

  .react-date-picker,
  .react-date-picker__wrapper {
    width: 100%;

    .react-calendar {
      color: rgb(${TextColors.Lighter});
      overflow: hidden;
      width: 100%;
    }
  }

  .react-date-picker__wrapper {
    background: transparent;
    box-shadow: 0 0 0 transparent;
    border: none;
    cursor: ${Cursor.Pointer};
    width: 100%;
  }

  .react-date-picker__inputGroup {
    line-height: 26px;
    padding: 0 ${Amount.Least};
  }

  .react-date-picker__inputGroup__input,
  .react-date-picker__inputGroup__leadingZero {
    color: rgb(${TextColors.InputControl});
    font-size: 14px;
    font-weight: 500;
  }

  .react-date-picker__inputGroup__leadingZero {
    margin-right: 4px;
  }

  input.react-date-picker__inputGroup__input,
  .react-date-picker__inputGroup__leadingZero {
    background: transparent;
    border: 1px solid transparent;
    border-radius: 4px;
    color: rgb(${TextColors.InputControl});
    height: initial;
    line-height: 24px;
    padding: 2px 6px 3px 6px;
    text-align: center;
    vertical-align: middle;

    &:hover {
      border: 1px solid rgb(${BorderColors.InputControl});
    }

    &:focus {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
      border: 1px solid rgb(${BorderColors.Primary});
    }
  }

  .react-date-picker__inputGroup__divider {
    color: rgb(${ForegroundColors.Default});
  }

  .react-date-picker__calendar {
    background-color: rgb(${BackgroundColors.InputControl});
    border: 2px solid
      rgb(
        ${props =>
          getBorderColor({ error: props.error, focused: props.focused })}
      );
    border-top: none;
    border-radius: 0 0 ${Amount.Least} ${Amount.Least};
    /* box-shadow: $ {DepthShadow.Higher}; */
    height: auto !important;
    left: -4px !important;
    padding: ${Amount.Least};
    right: -1px !important;
    top: calc(${props => props.size} - 3px) !important;
    transition: border 0.2s ease-in-out, opacity 0.2s ease-in-out,
      transform 0.2s ease-in-out;
    z-index: 100500;
    width: calc(100% + (${props => props.size} + 8px));
  }

  .react-date-picker__calendar.react-date-picker__calendar--closed {
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
  }

  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__arrow {
      background-color: rgb(${BackgroundColors.Dark});
      border: none;
      border-radius: ${Size.Default};
      color: rgb(${TextColors.Lighter});
      cursor: ${Cursor.Pointer};
      height: ${Size.Default};
      margin: 0 ${Amount.Least};
      text-align: center;
      width: ${Size.Default};

      &:hover {
        background-color: rgb(${BackgroundColors.Darker});
      }
    }

    .react-calendar__navigation__label {
      background-color: transparent;
      border: none;
      border-radius: ${Amount.All};
      color: rgb(${TextColors.Default});
      cursor: ${Cursor.Pointer};
      font-weight: ${TextWeight.More};
      padding: ${Amount.Least} 0;

      &:hover {
        background-color: rgb(${BackgroundColors.Darker});
      }
    }
  }

  .react-calendar__tile {
    background: transparent;
    border: none;
    border-radius: ${Amount.Least};
    color: rgb(${TextColors.Default});
    padding: ${Amount.Less} 0;

    &:hover {
      background-color: rgb(${BackgroundColors.Darker});
      color: rgb(${TextColors.Light});
      cursor: ${Cursor.Pointer};
    }
  }

  .react-calendar__tile--active,
  .react-calendar__tile--hasActive {
    background: rgb(${BackgroundColors.Primary}) !important;
    color: rgb(${TextColors.InputControl});
  }

  .react-calendar__month-view__weekdays__weekday {
    border: none;
    font-size: ${TextSize.Small};
    padding: ${Amount.Least} 0;
    text-align: center;
    text-decoration: none;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: rgb(${TextColors.Darker});
  }
`;

const DownArrow = styled.div<
  {
    readonly menuVisible: boolean;
  } & ContainerProps<HTMLDivElement> &
    TransformProps
>`
  cursor: ${Cursor.Pointer} !important;

  ${LayoutStyles};
  ${AppearanceStyles};
  ${DimensionStyles};
`;

export const DateInput = memo(
  ({
    backgroundColor = BackgroundColors.InputControl,
    boxShadow = DepthShadow.Low,
    border = {
      color: BorderColors.InputControl,
      style: BorderStyle.Solid,
      width: 1,
    },
    className = '',
    error,
    resetIcon,
    defaultValue,
    label,
    onChange,
    size = Size.Default,
    validation = { [Condition.IsDate]: true },
    ...props
  }: DateInputProps): ReactElement => {
    const [value, setValue] = useState<ISO8601String | undefined>(defaultValue);
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState<ValidationProblem[]>([]);
    const [valueChanged, setValueChanged] = useState(false);

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

        if (onChange && value)
          onChange({
            problems: [],
            validated: true,
            value,
          });
      }
    }, [value]);

    return (
      <>
        {(label || problems.length > 0) && (
          <InputLabel error={problems}>{label}</InputLabel>
        )}

        <InputContainer
          backgroundColor={backgroundColor}
          border={border}
          boxShadow={!focused ? boxShadow : DepthShadow.Higher}
          className={`${className} date-input`}
          error={problems}
          focused={focused}
          onMouseLeave={() => setFocused(false)}
          orientation={Orientation.Horizontal}
          // onClick={() => setFocused(!focused)}
          size={size}
          {...props}
        >
          <Wrapper error={problems} focused={focused} size={size}>
            {/* <DatePickerC
              calendarType="ISO 8601"
              // calendarIcon={
              //   <CalendarIcon focused={focused}>
              //     <Icon name={BasicIcons.Calendar} />
              //   </CalendarIcon>
              // }
              // clearIcon={<Icon {...resetIcon} />}
              calendarIcon={null}
              clearIcon={null}
              // isOpen={focused}
              locale="en-US"
              openCalendarOnFocus
              onChange={(val?: Date) => {
                setValueChanged(true);

                if (val) setValue(val.toISOString());
              }}
              onCalendarOpen={() => {
                setFocused(true);
              }}
              onCalendarClose={() => {
                setFocused(false);
              }}
              value={value ? new Date(value) : undefined}
            /> */}
          </Wrapper>

          <DownArrow
            alignItems={Align.Center}
            alignContent={Align.Center}
            border={{
              left: {
                color: BorderColors.InputControl,
                style: BorderStyle.Solid,
                width: 1,
              },
            }}
            className="down-arrow"
            grow={false}
            menuVisible={focused}
            // onClick={() => setFocused(!focused)}
            height={Size.Small}
            width={size}
          >
            <Icon
              color={
                focused ? ForegroundColors.Lightest : ForegroundColors.Lighter
              }
              name={BasicIcons.CaretDownArrow}
              className={focused ? 'up' : 'down'}
              size={Size.Smallest}
              transform={{
                rotate: focused ? 0 : 0,
              }}
            />
          </DownArrow>
        </InputContainer>
      </>
    );
  },
);
