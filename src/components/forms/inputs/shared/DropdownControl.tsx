import { BasicIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { DimensionStyles } from '../../../..';
import { rotate } from '../../../../lib/animation/transform';
import { getDepthZIndex } from '../../../../lib/css/depth/z-index';
import { AppearanceStyles } from '../../../../styles/appearance';
import { InputContainerStyles } from '../../../../styles/forms/input/container';
import { LayoutStyles } from '../../../../styles/layout';
import {
  Align,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  ContainerProps,
  Cursor,
  Depth,
  ForegroundColors,
  IconProps,
  InputContainerProps,
  InputProps,
  MouseEventProps,
  Orientation,
  Overflow,
  Size,
  TextColors,
  TextOverflow,
  TextProps,
  TransformProps,
  WhiteSpace,
} from '../../../../types';
import { Icon } from '../../../media/Icon';
import { Label } from '../../../typography/Label';

type DropdownControlProps = InputContainerProps<
  HTMLDivElement,
  InputProps<
    HTMLInputElement,
    any,
    TextProps<
      HTMLSpanElement,
      {
        readonly component?: ReactElement;
        readonly icon?: IconProps;
        readonly label?: string;
        readonly placeholderText?: string;
        readonly menuVisible: boolean;
      } & MouseEventProps<HTMLButtonElement>
    >
  >
>;

export const DropdownControl = memo(
  ({
    backgroundColor = BackgroundColors.DropdownMenu,
    border = {
      color: BorderColors.Default,
      style: BorderStyle.Solid,
      width: 1,
    },
    borderRadius = Amount.Least,
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
    ref,
    size = Size.Default,
    textColor = TextColors.DropdownMenu,
    ...props
  }: DropdownControlProps): ReactElement => {
    return (
      <Wrapper
        as="button"
        alignContent={Align.Stretch}
        alignItems={Align.Center}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        border={{
          ...border,
          // @ts-ignore
          color: error && (Array.isArray(error) && error.length > 0) ? BorderColors.Error : border?.color,
        }}
        depth={menuVisible ? Depth.Higher : Depth.Surface}
        orientation={Orientation.Horizontal}
        className={`${className} dropdown-control`}
        cursor={Cursor.Pointer}
        error={error}
        form="null"
        focused={focused}
        grow={false}
        menuVisible={menuVisible}
        onBlur={onBlur}
        onFocus={onFocus}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        {component ? (
          component
        ) : (
          <Label
            alignItems={Align.Center}
            alignContent={Align.Stretch}
            grow
            icon={icon}
            overflow={Overflow.Hidden}
            marginLeft={Amount.None}
            marginRight={Amount.None}
            paddingLeft={Amount.Less}
            paddingRight={Amount.Least}
            size={size}
            textColor={
              !label && placeholder ? TextColors.InputPlaceholder : textColor
            }
            textOverflow={TextOverflow.Ellipsis}
            whiteSpace={WhiteSpace.NoWrap}
            width="auto"
          >
            {label ?? placeholder ?? ''}
          </Label>
        )}

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
          menuVisible={menuVisible}
          height={Size.Small}
          width={size}
        >
          <Icon
            color={
              menuVisible ? ForegroundColors.Lightest : ForegroundColors.Lighter
            }
            name={BasicIcons.CaretDownArrow}
            className={menuVisible ? 'up' : 'down'}
            size={Size.Smallest}
            transform={{
              rotate: menuVisible ? -180 : 0,
            }}
          />
        </DownArrow>
      </Wrapper>
    );
  },
);

const DownArrow = styled.div<
  ContainerProps<
    HTMLDivElement,
    TransformProps<{
      readonly menuVisible: boolean;
    }>
  >
>`
  ${LayoutStyles};
  ${AppearanceStyles};
  ${DimensionStyles};
`;

const Wrapper = styled.button<DropdownControlProps>`
  ${InputContainerStyles};

  z-index: ${props =>
    (props.menuVisible
      ? getDepthZIndex(props.depth ?? Depth.Surface) + 3
      : 'auto')};

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
