import { BasicIcons } from '@srclaunch/icons';
import { ComponentRef, ForwardedRef, memo, ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { rotate } from '../../../../lib/animation/transform';
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
  ForegroundColors,
  InputProps,
  MouseEventProps,
  Orientation,
  Overflow,
  Size,
  Sizes,
  TextColors,
  TextOverflow,
  TextSize,
  TransformProps,
} from '../../../../types';
import { Container } from '../../../layout/Container';
import { Icon, IconProps } from '../../../media/Icon';
import { Text, TextProps } from '../../../typography/Text';
import { InputContainer, InputContainerProps } from './InputContainer';

type DropdownControlProps = {
  readonly component?: ReactElement;
  readonly icon?: IconProps;
  readonly label?: string;
  readonly placeholder?: string;
  readonly menuVisible: boolean;
  readonly ref?: ComponentRef<any>;
} & InputContainerProps &
  TextProps;

const Wrapper = styled.button<DropdownControlProps>`
  ${InputContainerStyles};

  z-index: ${props =>
    props.menuVisible
      ? getDepthZIndex(props.depth ?? Depth.Surface) + 3
      : 'auto'};

  ${props =>
    props.focused &&
    props.menuVisible &&
    css`
      border-bottom-color: transparent;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      &:before {
        border-radius: calc(${Amount.Least} + 3px) calc(${Amount.Least} + 3px) 0
          0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: none;
      }
    `};
`;

export const DropdownControl = memo(
  ({
    alignment = {},
    background = {},
    border = {},
    borderRadius = {},
    className = '',
    component,
    error,
    focused,
    icon,
    label,
    menuVisible,
    onFocus,
    onBlur,
    onClick,
    placeholder = 'Select an option',
    textSize = TextSize.Default,
    textColor = TextColors.DropdownMenu,
    ...props
  }: DropdownControlProps): ReactElement => {
    return (
      <InputContainer
        alignment={{
          horizontal: AlignHorizontal.Center,
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
          ...alignment,
        }}
        as="button"
        background={{ color: BackgroundColors.DropdownMenu, ...background }}
        borderRadius={{ all: Amount.Least, ...borderRadius }}
        border={{
          all: {
            color:
              error && Array.isArray(error) && error.length > 0
                ? BorderColors.Error
                : border.hasOwnProperty('color')
                ? // @ts-ignore
                  border?.color
                : BorderColors.InputControl,
            style: BorderStyle.Solid,
            width: 1,
          },
          ...border,
        }}
        depth={menuVisible ? Depth.Higher : Depth.Surface}
        className={`${className} dropdown-control`}
        cursor={Cursor.Pointer}
        error={error}
        form="null"
        focused={focused}
        onBlur={onBlur}
        onFocus={onFocus}
        onClick={onClick}
        padding={{
          left: Amount.Less,
          right: Amount.Less,
        }}
        {...props}
      >
        {component ? (
          component
        ) : (
          <Text
            lineHeight={Sizes.Small}
            textSize={textSize}
            textColor={
              !label && placeholder ? TextColors.InputPlaceholder : textColor
            }
            textOverflow={TextOverflow.Ellipsis}
          >
            {label ?? placeholder ?? ''}
          </Text>
        )}

        <Container
          alignment={{
            horizontal: AlignHorizontal.Center,
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Center,
          }}
          border={{
            left: {
              color: BorderColors.InputControl,
              style: BorderStyle.Solid,
              width: 1,
            },
          }}
          className="down-arrow"
          // size={{
          //   height: Sizes.Default,
          //   width: Sizes.Default,
          // }}
        >
          <Icon
            color={
              menuVisible ? ForegroundColors.Lightest : ForegroundColors.Lighter
            }
            name={BasicIcons.CaretDownArrow}
            className={menuVisible ? 'up' : 'down'}
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
