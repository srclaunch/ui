import { memo, ReactElement, useState } from 'react';

import {
  AlignHorizontal,
  Alignment,
  AlignVertical,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Cursor,
  Fill,
  Orientation,
  Overflow,
  Sizes,
  States,
  TextAlign,
  TextColors,
  TextDecorationLine,
  TextSize,
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

export type ButtonProps = ContainerProps &
  LabelProps & {
    readonly form?: string;
    readonly label?: string;
    readonly type?: ButtonType;
  };

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
    alignment = {},
    as = 'button',
    background = {},
    border = {},
    borderRadius = {},
    children,
    className = '',
    cursor = Cursor.Pointer,
    events = {},
    form,
    icon,
    label,
    lineHeight = Sizes.Default,
    padding = {},
    states = {},
    textAlign = TextAlign.Center,
    textColor,
    textDecoration = {},
    textSize = TextSize.Default,
    textWeight,
    type = ButtonType.Default,
    ...props
  }: ButtonProps): ReactElement => {
    const [focused, setFocused] = useState(false);
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

    return (
      <Container
        alignment={{
          horizontal: AlignHorizontal.Center,
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
          ...alignment,
        }}
        as={as}
        background={{ color: colors?.backgroundColor, ...background }}
        border={{
          all: {
            style: BorderStyle.None,
          },
          ...border,
        }}
        borderRadius={{ all: Amount.All, ...borderRadius }}
        className={`${className} button`}
        cursor={cursor}
        events={{
          focus: {
            onBlur: () => {
              setFocused(false);
            },
            onFocus: () => {
              setFocused(true);
            },
          },
          ...events,
        }}
        form={form}
        padding={
          typeof children === 'string'
            ? {
                left: `calc((${lineHeight} / 4) * 2)`,
                right: `calc((${lineHeight} / 4) * 2)`,
                ...padding,
              }
            : padding
        }
        // shadow={{
        //   radius: 8,
        //   color: colors?.backgroundColor,
        //   x: 0,
        //   y: 2,
        //   opacity: 35,
        //   spread: 4,
        // }}
        states={{
          ...states,
          active: {
            background: {
              color: background?.color ?? colors?.backgroundColor,
              opacity: 80,
            },
          },
          hovered: {
            background: {
              color: background?.color ?? colors?.backgroundColor,
              opacity: 90,
            },
          },
          state: {
            ...states.state,
            focused,
          },
        }}
        {...props}
      >
        {typeof children === 'string' ? (
          <Label
            icon={icon}
            lineHeight={lineHeight}
            selectable={false}
            textAlign={textAlign}
            textColor={colors?.textColor}
            textDecoration={{
              line: TextDecorationLine.None,
              ...textDecoration,
            }}
            textSize={textSize}
            textWeight={textWeight}
            states={states}
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
