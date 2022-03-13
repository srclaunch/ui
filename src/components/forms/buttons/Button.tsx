import { memo, MouseEvent, ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';

import { getLargerAmount } from '../../../lib/proportions/amount';
import {
  convertSizeToAmount,
  convertSizeToTextSize,
} from '../../../lib/proportions/conversions';
import { getSmallerSize } from '../../../lib/proportions/size';
import {
  AlignHorizontal,
  Alignment,
  AlignVertical,
  Amount,
  BackgroundColors,
  CommonComponentProps,
  Cursor,
  Orientation,
  Overflow,
  Sizes,
  TextAlign,
  TextColors,
  TextDecorationLine,
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

export type ButtonProps<E = HTMLButtonElement> = {
  readonly disabled?: boolean;
  readonly form?: string;
  readonly fullWidth?: boolean;
  readonly icon?: IconProps;
  readonly label?: string;
  readonly type?: ButtonType;
} & ContainerProps &
  LabelProps;

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
    alignment = {
      horizontal: AlignHorizontal.Center,
      orientation: Orientation.Horizontal,
      vertical: AlignVertical.Center,
    },
    background,
    borderRadius = {},
    children,
    className = '',
    cursor = Cursor.Pointer,
    disabled = false,
    form,
    hover,
    icon,
    label,
    lineHeight = Sizes.Default,
    onClick,
    onMouseEnter,
    onMouseLeave,
    padding = {
      left: Amount.Less,
      right: Amount.Less,
    },
    textAlign = TextAlign.Center,
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
      ? hover?.background?.color
        ? hover?.background.color
        : colors?.backgroundColor ?? background?.color
      : colors?.backgroundColor ?? background?.color;

    const updatedTextColor = hovered
      ? hover?.textColor
        ? hover?.textColor
        : colors?.textColor ?? textColor
      : colors?.textColor ?? textColor;

    return (
      <Container
        active={{
          background: {
            opacity: 80,
          },
          ...active,
        }}
        alignment={alignment}
        as="button"
        background={{ color: updatedBackgroundColor }}
        borderRadius={{ all: Amount.All, ...borderRadius }}
        className={`${className} button`}
        cursor={cursor}
        disabled={disabled}
        form={form}
        hover={{
          background: {
            opacity: 90,
          },
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
        overflow={Overflow.Visible}
        padding={padding}
        // shadow={{
        //   radius: 8,
        //   color: colors?.backgroundColor,
        //   x: 0,
        //   y: 2,
        //   opacity: 35,
        //   spread: 4,
        // }}
        {...props}
      >
        {typeof children === 'string' ? (
          <Label
            icon={icon}
            lineHeight={lineHeight}
            textAlign={textAlign}
            textColor={updatedTextColor}
            textDecoration={
              type === ButtonType.Link && hovered
                ? {
                    line: TextDecorationLine.Underline,
                  }
                : undefined
            }
            textSize={textSize}
            textWeight={textWeight}
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
