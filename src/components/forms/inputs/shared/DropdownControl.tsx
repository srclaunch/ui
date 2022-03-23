import { BasicIcons } from '@srclaunch/icons';
import { ComponentRef, ForwardedRef, memo, ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { getDepthZIndex } from '../../../../lib/css/depth/z-index';
import { InputContainerStyles } from '../../../../styles/forms/input/container';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Cursor,
  Depth,
  DepthShadow,
  Fill,
  Orientation,
  Sizes,
  TextColors,
  TextOverflow,
  TextSize,
} from '../../../../types';
import { Container } from '../../../layout/Container';
import { Spacer } from '../../../layout/Spacer';
import { Icon, IconProps } from '../../../media/Icon';
import { Label } from '../../../typography/Label';
import { Text, TextProps } from '../../../typography/Text';
import { InputContainer, InputContainerProps } from './InputContainer';

type DropdownControlProps = InputContainerProps<string> & {
  readonly component?: ReactElement;
  readonly icon?: IconProps;
  readonly label?: string;
  readonly placeholder?: string;
  readonly ref?: ComponentRef<any>;
};

export const DropdownControl = memo(
  ({
    alignment = {},
    background = {},
    border = {},
    borderRadius = {},
    className = '',
    component,
    cursor = Cursor.Pointer,
    icon,
    label,
    placeholder = 'Select an option',
    states = {},
    size = {},
    textSize = TextSize.Default,
    textColor = TextColors.DropdownMenu,
    ...props
  }: DropdownControlProps): ReactElement => {
    return (
      <InputContainer
        alignment={{
          fill: Fill.Horizontal,
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
          ...alignment,
        }}
        as="button"
        background={{ color: BackgroundColors.DropdownMenu, ...background }}
        borderRadius={Object.assign(
          {},
          { all: Amount.Least, ...borderRadius },
          states.state?.dropdown?.visible
            ? {
                bottomLeft: Amount.None,
                bottomRight: Amount.None,
              }
            : {},
        )}
        border={Object.assign(
          {},
          {
            all: {
              color:
                states.state?.error &&
                Array.isArray(states.state.error) &&
                states?.state.error.length > 0
                  ? BorderColors.Error
                  : border?.all?.color ?? BorderColors.InputControl,
              style: BorderStyle.Solid,
              width: 1,
            },
            ...border,
          },
          states.state?.dropdown?.visible
            ? {
                bottom: {
                  color: BorderColors.Transparent,
                  style: BorderStyle.None,
                  width: 1,
                },
              }
            : {},
        )}
        depth={states.state?.dropdown?.visible ? Depth.Highest : Depth.Surface}
        className={`${className} dropdown-control`}
        cursor={cursor}
        form="null"
        shadow={
          states.state?.dropdown?.visible
            ? DepthShadow.Surface
            : DepthShadow.Low
        }
        states={states}
        {...props}
      >
        {component ? (
          component
        ) : (
          <Label
            alignment={{
              fill: Fill.Horizontal,
            }}
            // lineHeight={`calc(${size?.height ?? Sizes.Default} - ${
            //   states?.state?.dropdown?.visible ? 1 : 0
            // }px)`}
            padding={{
              left: Amount.Less,
            }}
            selectable={false}
            textSize={textSize}
            textColor={
              !label && placeholder ? TextColors.InputPlaceholder : textColor
            }
            textOverflow={TextOverflow.Ellipsis}
          >
            {label ?? placeholder ?? ''}
          </Label>
        )}

        <Container
          alignment={{
            horizontal: AlignHorizontal.Center,
            vertical: AlignVertical.Center,
          }}
          border={{
            left: {
              color: BorderColors.Default,
              style: BorderStyle.Solid,
              width: 1,
            },
          }}
          className="down-arrow"
          padding={{
            left: Amount.Least,
            right: Amount.Least,
          }}
          size={{
            height: `calc(${size?.height ?? Sizes.Default} / 5 * 3)`,
            width: size?.height ?? Sizes.Default,
          }}
        >
          <Icon
            color={
              states.state?.visible ? TextColors.Lightest : TextColors.Lighter
            }
            name={BasicIcons.CaretDownArrow}
            className={states.state?.visible ? 'up' : 'down'}
            size={{
              height: Sizes.Smallest,
              width: Sizes.Smallest,
            }}
            // transform={{
            //   rotate: menuVisible ? -180 : 0,
            // }}
          />
        </Container>
      </InputContainer>
    );
  },
);
