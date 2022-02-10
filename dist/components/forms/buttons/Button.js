import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useState } from 'react';
import styled from 'styled-components';
import { getLargerAmount } from '../../../lib/proportions/amount';
import { convertSizeToAmount, convertSizeToTextSize, } from '../../../lib/proportions/conversions';
import { getSmallerSize } from '../../../lib/proportions/size';
import { AppearanceStyles } from '../../../styles/appearance';
import { LayoutStyles } from '../../../styles/layout';
import { Align, Amount, BackgroundColors, Cursor, Orientation, Overflow, Size, TextColors, TextWeight, } from '../../../types';
import { Label } from '../../typography/Label';
export var ButtonType;
(function (ButtonType) {
    ButtonType["Default"] = "black";
    ButtonType["Error"] = "error";
    ButtonType["Info"] = "info";
    ButtonType["Inline"] = "inline";
    ButtonType["Link"] = "link";
    ButtonType["Primary"] = "primary";
    ButtonType["Secondary"] = "secondary";
    ButtonType["Success"] = "success";
    ButtonType["Transparent"] = "transparent";
    ButtonType["Warning"] = "warning";
    ButtonType["White"] = "white";
})(ButtonType || (ButtonType = {}));
const Wrapper = styled.button `
  background-color: blue;
  ${LayoutStyles};
  ${AppearanceStyles};
`;
/*  ${LayoutStyles};
  ${AppearanceStyles};
  ${FocusedStyles};
  * {
    cursor: ${props => props.cursor};
  }

  &:before {
    border-color: rgb(${props => props.backgroundColor});
    border-radius: ${props => `calc(${props.borderRadius} + 3px)`};
  }

  ${props =>
    props.disabled &&
    css`
      cursor: default;
      opacity: 0.5;

      * {
        cursor: default;
      }
    `};

  ${props =>
    props.type === ButtonType.Link &&
    css`
      padding-left: calc(${props.size} / 5) !important;
      padding-right: calc(${props.size} / 5) !important;

      &:before {
        border-radius: ${Amount.All};
        left: -9px;
        right: -9px;
      }
    `};
    */
export const Button = memo(({ active, alignItems = Align.Center, alignContent = Align.Center, backgroundColor, borderRadius = Amount.All, children, className = '', cursor = Cursor.Pointer, disabled = false, form, fullWidth, hover, icon, label, onClick, onMouseEnter, onMouseLeave, orientation = Orientation.Horizontal, size = Size.Default, textColor, textSize, textWeight, type, ...props }) => {
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
    return (_jsx(Wrapper, { active: {
            backgroundOpacity: 80,
            ...active,
        }, alignItems: alignItems, alignContent: alignContent, as: "button", backgroundColor: updatedBackgroundColor, borderRadius: fullWidth && !borderRadius ? Amount.Least : borderRadius, boxShadow: {
            blurRadius: 8,
            color: colors?.backgroundColor,
            offsetX: 0,
            offsetY: 2,
            opacity: 35,
            spreadRadius: 4,
        }, className: `${className} button`, cursor: cursor, disabled: disabled, form: form, fullWidth: fullWidth, grow: fullWidth, hover: {
            backgroundOpacity: 90,
            ...hover,
        }, onClick: onClick, onMouseEnter: (e) => {
            setHovered(true);
            if (onMouseEnter)
                onMouseEnter(e);
        }, onMouseLeave: (e) => {
            setHovered(false);
            if (onMouseLeave)
                onMouseLeave(e);
        }, orientation: orientation, overflow: Overflow.Visible, paddingLeft: getLargerAmount(convertSizeToAmount(size)), paddingRight: getLargerAmount(convertSizeToAmount(size)), size: size, type: type, ...props, children: typeof children === 'string' ? (_jsx(Label, { alignContent: fullWidth ? Align.Center : alignContent, icon: icon, lineHeight: size === Size.Smaller || size === Size.Smallest
                ? Size.Small
                : size, size: size, textColor: updatedTextColor, textSize: convertSizeToTextSize(getSmallerSize(size)), textWeight: TextWeight.More, underline: type === ButtonType.Link && hovered, children: children }, void 0)) : (_jsx(_Fragment, { children: children }, void 0)) }, void 0));
});
//# sourceMappingURL=Button.js.map