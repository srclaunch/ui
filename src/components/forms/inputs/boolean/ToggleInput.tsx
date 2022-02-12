import { BasicIcons } from '@srclaunch/icons';
import { ValidationProblem } from '@srclaunch/types';
import { memo, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { AppearanceStyles } from '../../../../styles/appearance';
import { FocusedStyles } from '../../../../styles/focused';
import { LayoutStyles } from '../../../../styles/layout';
import {
  Align,
  Amount,
  AppearanceProps,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Colors,
  ContainerProps,
  Depth,
  DepthShadow,
  FocusProps,
  InputProps,
  InputValueChangeHandler,
  Orientation,
  Size,
  SizeProps,
  TextColors,
} from '../../../../types';
import { ErrorLabel } from '../../../errors/ErrorLabel';
import { Button, ButtonType } from '../../../forms/buttons/Button';
import { Container } from '../../../layout/Container';
import { Icon } from '../../../media/Icon';
import { Label } from '../../../typography/Label';
import { InputLabel } from '../../labels/InputLabel';

export type ToggleInputProps<E = HTMLInputElement> = {
  readonly trueLabel?: string;
  readonly falseLabel?: string;
} & AppearanceProps &
  InputProps<E, boolean>;

export const ToggleInput = memo(
  ({
    backgroundColor = BackgroundColors.InputControl,
    border = {
      color: BorderColors.InputControl,
      style: BorderStyle.Solid,
      width: 1,
    },
    className = '',
    defaultValue = false,
    falseLabel,
    label,
    onChange,
    trueLabel,
    size = Size.Default,
    width = 55,
  }: ToggleInputProps): React.ReactElement => {
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState<ValidationProblem[]>([]);
    const [toggleValue, setToggleValue] = useState(defaultValue ?? false);

    useEffect(() => {
      if (onChange) onChange({ problems: [], value: toggleValue });
    }, [toggleValue]);

    useEffect(() => {
      setToggleValue(defaultValue ?? toggleValue ?? '');
    }, [defaultValue]);

    return (
      <>
        <Container orientation={Orientation.Horizontal} grow={false}>
          {label && <InputLabel>{label}</InputLabel>}

          {problems.length > 0 ? (
            <ErrorLabel alignContent={Align.Right}>
              {problems[0]?.message.short}
            </ErrorLabel>
          ) : null}
        </Container>

        <Container
          alignContent={Align.Left}
          alignItems={Align.Center}
          orientation={Orientation.Horizontal}
          className={`${className} toggle-input`}
          grow={false}
        >
          {falseLabel && (
            <Button
              form="null"
              onClick={() => setToggleValue(false)}
              type={ButtonType.Inline}
            >
              <Label
                className="toggle-input-falsey-label"
                textColor={!toggleValue ? TextColors.Light : TextColors.Lighter}
              >
                {falseLabel}
              </Label>
            </Button>
          )}

          <Toggle
            alignItems={Align.Center}
            as="button"
            backgroundColor={backgroundColor}
            border={border}
            borderRadius={Amount.All}
            form="null"
            onClick={() => setToggleValue(!toggleValue)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            orientation={Orientation.Horizontal}
            padding={Amount.Least}
            toggleValue={toggleValue}
            size={size}
          >
            <ToggleSwitch
              alignItems={Align.Center}
              alignContent={Align.Center}
              backgroundColor={toggleValue ? Colors.Primary : Colors.Error}
              depth={Depth.High}
              focused={focused}
              toggleValue={toggleValue}
              size={size}
            >
              <Icon
                color={BackgroundColors.Dark}
                name={toggleValue ? BasicIcons.Checkmark2 : BasicIcons.Close}
                size={Size.Smallest}
              />
            </ToggleSwitch>
          </Toggle>

          {trueLabel && (
            <Button
              form="null"
              onClick={() => setToggleValue(true)}
              type={ButtonType.Inline}
            >
              <Label
                className="toggle-input-truthy-label"
                textColor={toggleValue ? TextColors.Light : TextColors.Lighter}
              >
                {trueLabel}
              </Label>
            </Button>
          )}
        </Container>
      </>
    );
  },
);

// const Label = styled.label`
//   color: rgba(150, 150, 150, 1);
//   display: block;
//   font-size: 16px;
//   font-weight: bold;
//   margin-bottom: 5px;
// `;

const Toggle = styled.button<
  {
    readonly toggleValue: boolean;
  } & ContainerProps<HTMLButtonElement>
>`
  ${LayoutStyles};
  ${AppearanceStyles};

  box-shadow: ${DepthShadow.Low};
  border: none;
  cursor: pointer;
  width: calc(${props => props.size} * 2 - 2px);
`;

const ToggleSwitch = styled.span<
  {
    readonly toggleValue: boolean;
  } & ContainerProps<HTMLSpanElement> &
    FocusProps
>`
  ${LayoutStyles};
  ${AppearanceStyles};
  ${FocusedStyles};

  box-shadow: ${DepthShadow.High};
  border-radius: ${Amount.All};
  height: ${props => `calc(${props.size} - 8px)`};
  transform: translateX(0);
  transition: background 0.1s ease-in-out, transform 0.1s ease-in-out;
  width: ${props => `calc(${props.size} - 8px)`};

  i.icon {
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
  }
  /* 
  @keyframes toggle-animation {
    0% {
      height: 100%;
    }

    50% {
      height: 50%;
      width: 50%;
    }

    100% {
      height: 100%;
    }
  } */

  &:before {
    border-radius: 100%;
  }

  ${props =>
    props.toggleValue === true &&
    css`
      transform: translateX(calc(${props.size} - ${Amount.Least}));
      /* animation: toggle-animation 0.2s ease-in-out; */

      i.icon {
        opacity: 1;
      }
    `}

  ${props =>
    props.toggleValue === false &&
    css`
      /* */
    `}
`;
