import { Condition, SSN, ValidationProblem } from '@srclaunch/types';
import {
  // getValidationProblemLabel,
  validate,
} from '@srclaunch/validation';
import {
  createRef,
  memo,
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

import { FocusedStyles } from '../../../../styles/focused';
import { TextStyles } from '../../../../styles/typography';
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
  KeyboardEventProps,
  MouseEventProps,
  Orientation,
  Size,
  SizeProps,
  TextColor,
  TextColors,
  TextSize,
  TextWeight,
} from '../../../../types';
import { ErrorLabel } from '../../../errors/ErrorLabel';
import { Container } from '../../../layout/Container';
import { Icon } from '../../../media/Icon';
import { ProgressSpinner } from '../../../progress/ProgressSpinner';
import { Label } from '../../../typography/Label';
import { TextProps } from '../../../typography/Text';
import { InputLabel } from '../../labels/InputLabel';
import { InputContainer } from '../shared/InputContainer';

export type SSNInputProps<
  E = HTMLInputElement,
  V = SSN,
  P = Record<string, unknown>,
> = InputProps<
  E,
  V,
  {
    readonly icon?: typeof Icon;
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

export const SSNInput = memo(
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
    size = Size.Default,
    textColor = TextColors.InputControl,
    textWeight = TextWeight.Default,
    validation = { [Condition.IsSSN]: true },
    ...props
  }: SSNInputProps): ReactElement => {
    const [value, setValue] = useState<number[]>(
      defaultValue
        ? [
            Number.parseInt(defaultValue?.toString().slice(0, 3) || '000'),
            Number.parseInt(defaultValue?.toString().slice(3, 5) || '00'),
            Number.parseInt(defaultValue?.toString().slice(5) || '0000'),
          ]
        : [],
    );
    const [valueChanged, setValueChanged] = useState(false);
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState<ValidationProblem[]>([]);

    const firstInputRef = useRef<HTMLInputElement>();
    const secondInputRef = useRef<HTMLInputElement>();
    const thirdInputRef = useRef<HTMLInputElement>();

    useEffect(() => {
      setValueChanged(true);

      if (valueChanged) {
        const probs = validate(value, validation);

        setProblems(probs);

        if (onChange && value)
          onChange({
            problems: probs,
            validated: probs.length === 0,
            value: Number.parseInt(value.join('')),
          });
      }
    }, [value]);

    return (
      <>
        <Container orientation={Orientation.Horizontal}>
          {label && <InputLabel>{label}</InputLabel>}

          {problems.length > 0 ? (
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
          className={`${className} ssn-input`}
          error={problems}
          focused={focused}
          onClick={() => {
            if (!focused && firstInputRef.current) {
              firstInputRef.current.focus();
            }
          }}
          orientation={Orientation.Horizontal}
          paddingLeft={Amount.Least}
          paddingRight={Amount.Least}
          size={size}
          {...props}
        >
          {icon && <>{icon}</>}

          <Input
            alignText={Align.Center}
            // defaultValue={defaultValue}
            hidden={hidden}
            max={999}
            min={100}
            name={name}
            onBlur={() => setFocused(false)}
            // @ts-ignore
            onChange={(e: any) => {
              setValueChanged(true);
              setValue([e.target.value, value[1], value[2]]);

              if (e.target.value.length === 3 && secondInputRef.current) {
                secondInputRef.current?.focus();
              }
            }}
            onFocus={() => setFocused(true)}
            lineHeight={size}
            placeholder="123"
            onKeyPress={(e: any) => {
              if (e.target.value.length === 3) {
                e.preventDefault();
              }
            }}
            ref={firstInputRef}
            textColor={textColor}
            type="number"
            // value={value[0]}
          />

          <Label textSize={TextSize.Larger}>-</Label>

          <Input
            alignText={Align.Center}
            // defaultValue={defaultValue}
            hidden={hidden}
            max={99}
            min={1}
            name={name}
            onBlur={() => setFocused(false)}
            // @ts-ignore
            onChange={(e: any) => {
              setValueChanged(true);
              setValue([value[0], e.target.value, value[2]]);

              if (e.target.value.length === 2) {
                thirdInputRef.current?.focus();
              }
            }}
            onFocus={() => setFocused(true)}
            lineHeight={size}
            placeholder="45"
            onKeyPress={(e: any) => {
              if (e.target.value.length === 2) {
                e.preventDefault();
              }
            }}
            onKeyDown={(e: any) => {
              if (e.key === 'Backspace' && e.target.value.length === 0) {
                firstInputRef.current?.focus();
              }
            }}
            ref={secondInputRef}
            textColor={textColor}
            type="number"
            // value={value[1]}
          />

          <Label textSize={TextSize.Larger}>-</Label>

          <Input
            alignText={Align.Center}
            // defaultValue={defaultValue}
            hidden={hidden}
            max={9999}
            min={1000}
            name={name}
            onBlur={() => setFocused(false)}
            onChange={(e: any) => {
              setValueChanged(true);
              setValue([value[0], value[1], e.target.value]);
            }}
            onFocus={() => setFocused(true)}
            lineHeight={size}
            placeholder="6789"
            onKeyPress={(e: any) => {
              if (e.target.value.length === 4) {
                e.preventDefault();
              }
            }}
            onKeyDown={(e: any) => {
              if (e.key === 'Backspace' && e.target.value.length === 0) {
                secondInputRef.current?.focus();
              }
            }}
            ref={thirdInputRef}
            textColor={textColor}
            type="number"
            // value={value[2]}
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

const Input = styled.input<SSNInputProps>`
  ${FocusedStyles};
  ${TextStyles};

  background: transparent;
  border: none;
  outline: none;
  padding: 0 ${Amount.Least};
  -moz-appearance: textfield;

  &::placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-webkit-input-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-moz-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
