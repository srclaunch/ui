import {
  memo,
  ReactElement,
  //  useEffect, useState
} from 'react';
// import DatePickerC from 'react-date-picker';
import styled from 'styled-components';
import { Condition, DateTime } from '@srclaunch/types';

// import { BasicIcons } from '@srclaunch/icons';
import { InputContainer, InputContainerProps } from '../shared/InputContainer';

// import { validate } from '@srclaunch/validation';

type DateTimeInputProps = InputContainerProps<DateTime>;

export const DateTimeInput = memo(
  ({
    events = {},
    defaultValue = new Date().toISOString(),
    states = {},

    validation = { conditions: { [Condition.IsDate]: true } },
  }: DateTimeInputProps): ReactElement => {
    // const [value, setValue] = useState<DateTime>(defaultValue);
    // const [focused, setFocused] = useState(false);
    // const [problems, setProblems] = useState<ValidationProblem[]>([]);

    // useEffect(() => {
    // if (validation) {
    // const probs = validate(value, validation);

    // setProblems(probs);

    // if (onChange)
    // onChange({
    //   problems: probs,
    //   validated: probs.length === 0,
    //   // value,
    // });
    // } else {
    // setProblems([]);

    // if (onChange && value)
    // onChange({
    // problems: [],
    // validated: true,
    // value,
    // });
    // }
    // }, [value]);

    return (
      <InputContainer
      // error={problems.length > 0 || Boolean(error)}
      // focused={focused}
      >
        <Wrapper>
          {/* <DatePickerC
            calendarType={'ISO 8601'}
            calendarIcon={
              <CalendarIcon focused={focused}>
                <Icon name={BasicIcons.Calendar} />
              </CalendarIcon>
            }
            // clearIcon={resetIcon}
            // isOpen={!isFocused}
            locale={'en-US'}
            onChange={(val?: Date) => {
              if (val) setValue(DateTime.fromJSDate(val));
            }}
            onCalendarOpen={() => {
              setFocused(true);
            }}
            onCalendarClose={() => {
              setFocused(false);
            }}
            value={value?.toJSDate() ?? new Date()}
          /> */}
        </Wrapper>
      </InputContainer>
    );
  },
);

const Wrapper = styled.div`
  cursor: pointer;

  .react-date-picker,
  .react-date-picker__wrapper {
    border-radius: 6px;
    width: 100%;

    .react-calendar {
      border-radius: 15px;
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      width: 100%;
    }
  }

  .react-date-picker__wrapper {
    background: white;
    box-shadow: 0 0 0 transparent;
    border: none;
    padding: 6px;
  }

  .react-date-picker__inputGroup {
    line-height: 26px;
  }

  .react-date-picker__inputGroup__input,
  .react-date-picker__inputGroup__leadingZero {
    color: #5b5b5b;
    font-size: 14px;
    font-weight: 500;
  }

  .react-date-picker__inputGroup__leadingZero {
    margin-right: 4px;
  }
  input.react-date-picker__inputGroup__input,
  .react-date-picker__inputGroup__leadingZero {
    border: 1px solid transparent;
    border-radius: 4px;
    color: #5b5b5b;
    height: initial;
    line-height: 24px;
    padding: 2px 6px 3px 6px;
    text-align: center;
    vertical-align: middle;

    &:hover {
      border: 1px solid #bbb;
    }

    &:focus {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
      border: 1px solid rgba(65, 145, 6, 1);
    }
  }

  select.react-date-picker__inputGroup__input {
    height: 27px;
  }

  .react-date-picker__inputGroup__divider {
    color: #aaa;
  }

  .react-date-picker__calendar {
    top: 45px !important;
    z-index: 100500;
  }

  .react-calendar__tile {
    border-radius: 50px;

    &:hover {
      background: #f2f2f2;
    }
  }

  .react-calendar__tile--active,
  .react-calendar__tile--hasActive {
    background: rgba(65, 145, 63, 1) !important;
    color: white;
  }
`;

// const CalendarIcon = styled.div<{ focused: boolean }>`
//   svg {
//     height: 20px;
//     width: 20px;

//     g {
//       fill: ${props => (props.focused ? '#aaa' : '#9b9b9b')} !important;
//     }
//   }
// `;
