import { memo, MouseEvent, ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';

import { getLargerAmount } from '../../../lib/proportions/amount';
import {
  convertSizeToAmount,
  convertSizeToTextSize,
} from '../../../lib/proportions/conversions';
import { getSmallerSize } from '../../../lib/proportions/size';
import {
  Align,
  Amount,
  BackgroundColors,
  Cursor,
  Orientation,
  Overflow,
  Size,
  SizeProps,
  TextColors,
  TextWeight,
} from '../../../types/index';
import { Container, ContainerProps } from '../../layout/Container';
import { IconProps } from '../../media/Icon';
import { Label, LabelProps } from '../../typography/Label';

export enum ButtonType {
  Default = 'black',
  Error = 'error',
  Info = 'info',
  Inline = 'inline',
  Link = 'link',
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Transparent = 'transparent',
  Warning = 'warning',
  White = 'white',
}

export type ButtonProps = {
  readonly disabled?: boolean;
  readonly form?: string;
  readonly fullWidth?: boolean;
  readonly icon?: IconProps;
  readonly label?: string;
  readonly type?: ButtonType;
} & ContainerProps<HTMLButtonElement> &
  LabelProps &
  SizeProps;

// const Wrapper = styled.button<ButtonProps>`
//   ${LayoutStyles};
//   ${AppearanceStyles};
//   ${FocusedStyles};

//   * {
//     cursor: ${props => props.cursor};
//   }

//   &:before {
//     border-color: rgb(${props => props.backgroundColor});
//     border-radius: ${props => `calc(${props.borderRadius} + 3px)`};
//   }

//   ${props =>
//     props.disabled &&
//     css`
//       cursor: default;
//       opacity: 0.5;

//       * {
//         cursor: default;
//       }
//     `};

//   ${props =>
//     props.type === ButtonType.Link &&
//     css`
//       padding-left: calc($ {props.size} / 5) !important;
//       padding-right: calc($ {props.size} / 5) !important;

//       &:before {
//         border-radius: ${Amount.All};
//         left: -9px;
//         right: -9px;
//       }
//     `};
// `;

export const Button = memo(
  ({
    active,
    alignItems = Align.Center,
    alignContent = Align.Center,
    backgroundColor,
    borderRadius = Amount.All,
    children,
    className = '',
    cursor = Cursor.Pointer,
    disabled = false,
    form,
    fullWidth,
    hover,
    icon,
    label,
    onClick,
    onMouseEnter,
    onMouseLeave,
    orientation = Orientation.Horizontal,
    size = Size.Default,
    textColor,
    textSize,
    textWeight,
    type,
    ...props
  }: ButtonProps): ReactElement => {
    const [hovered, setHovered] = useState(false);

    const getColors = () => {
      if (!type)
        return {
          backgroundColor: BackgroundColors.Black,
          textColor: TextColors.BlackContrast,
        };

      switch (type) {
        case ButtonType.Default:
          return {
            backgroundColor: BackgroundColors.Default,
            textColor: TextColors.DefaultContrast,
          };
        case ButtonType.Error:
          return {
            backgroundColor: BackgroundColors.Error,
            textColor: TextColors.ErrorContrast,
          };
        case ButtonType.Info:
          return {
            backgroundColor: BackgroundColors.Info,
            textColor: TextColors.InfoContrast,
          };
        case ButtonType.Inline:
          return {
            backgroundColor: BackgroundColors.Transparent,
            textColor: TextColors.Default,
          };
        case ButtonType.Link:
          return {
            backgroundColor: BackgroundColors.Transparent,
            textColor: TextColors.Primary,
          };
        case ButtonType.Primary:
          return {
            backgroundColor: BackgroundColors.Primary,
            textColor: TextColors.PrimaryContrast,
          };
        case ButtonType.Secondary:
          return {
            backgroundColor: BackgroundColors.Secondary,
            textColor: TextColors.SecondaryContrast,
          };
        case ButtonType.Success:
          return {
            backgroundColor: BackgroundColors.Success,
            textColor: TextColors.SuccessContrast,
          };
        case ButtonType.Transparent:
          return {
            backgroundColor: BackgroundColors.Transparent,
            textColor: TextColors.Default,
          };
        case ButtonType.Warning:
          return {
            backgroundColor: BackgroundColors.Warning,
            textColor: TextColors.WarningContrast,
          };
        case ButtonType.White:
          return {
            backgroundColor: BackgroundColors.White,
            textColor: TextColors.WhiteContrast,
          };
      }
    };

    const colors = getColors();

    const updatedBackgroundColor = hovered
      ? hover?.backgroundColor
        ? hover?.backgroundColor
        : colors?.backgroundColor ?? backgroundColor
      : colors?.backgroundColor ?? backgroundColor;

    const updatedTextColor = hovered
      ? hover?.textColor
        ? hover?.textColor
        : colors?.textColor ?? textColor
      : colors?.textColor ?? textColor;

    return (
      <Container
        active={{
          backgroundOpacity: 80,
          ...active,
        }}
        alignItems={alignItems}
        alignContent={alignContent}
        as="button"
        backgroundColor={updatedBackgroundColor}
        borderRadius={fullWidth && !borderRadius ? Amount.Least : borderRadius}
        boxShadow={{
          blurRadius: 8,
          color: colors?.backgroundColor,
          offsetX: 0,
          offsetY: 2,
          opacity: 35,
          spreadRadius: 4,
        }}
        className={`${className} button`}
        cursor={cursor}
        disabled={disabled}
        form={form}
        grow={fullWidth}
        hover={{
          backgroundOpacity: 90,
          ...hover,
        }}
        onClick={onClick}
        onMouseEnter={(e: MouseEvent<HTMLButtonElement>) => {
          setHovered(true);

          if (onMouseEnter) onMouseEnter(e);
        }}
        onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => {
          setHovered(false);

          if (onMouseLeave) onMouseLeave(e);
        }}
        orientation={orientation}
        overflow={Overflow.Visible}
        paddingLeft={getLargerAmount(convertSizeToAmount(size))}
        paddingRight={getLargerAmount(convertSizeToAmount(size))}
        size={size}
        {...props}
      >
        {typeof children === 'string' ? (
          <Label
            alignContent={fullWidth ? Align.Center : alignContent}
            icon={icon}
            lineHeight={
              size === Size.Smaller || size === Size.Smallest
                ? Size.Small
                : size
            }
            size={size}
            textColor={updatedTextColor}
            textSize={convertSizeToTextSize(getSmallerSize(size))}
            textWeight={textWeight}
            underline={type === ButtonType.Link && hovered}
          >
            {children}
          </Label>
        ) : (
          <>{children}</>
        )}
      </Container>
    );
  },
);
