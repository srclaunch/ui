import { jsx as _jsx } from "react/jsx-runtime";
import { BasicIcons } from '@srclaunch/icons';
import { memo, useState } from 'react';
import styled from 'styled-components';
import { AppearanceStyles } from '../../styles/appearance';
import { DimensionStyles } from '../../styles/appearance/dimension';
import { FocusedStyles } from '../../styles/focused';
import { LayoutStyles } from '../../styles/layout';
import { Align, Amount, BackgroundColors, Depth, ForegroundColors, Size, } from '../../types';
import { Icon } from '../media/Icon';
export const CloseButton = memo(({ alignItems = Align.Center, backgroundColor = BackgroundColors.CloseButton, iconColor = ForegroundColors.CloseButton, className = '', onClick, size = Size.Default, ...props }) => {
    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);
    const iconHoverColor = hovered
        ? ForegroundColors.PrimaryContrast
        : iconColor;
    return (_jsx(Container, { alignContent: Align.Center, alignItems: Align.Center, as: "button", backgroundColor: hovered ? BackgroundColors.Primary : backgroundColor, borderRadius: Amount.All, className: `${className} close-button`, depth: Depth.Higher, focused: focused, form: "null", grow: false, height: size, onClick: onClick, onFocus: () => setFocused(true), onBlur: () => setFocused(false), onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), width: size, ...props, children: _jsx(Icon, { color: iconHoverColor, name: BasicIcons.Close, size: Size.Smallest }, void 0) }, void 0));
});
const Container = styled.button `
  ${LayoutStyles};
  ${AppearanceStyles};
  ${FocusedStyles};
  ${DimensionStyles};

  border: none;
  // border-radius: var(--size-${props => props.size});
  cursor: pointer;
  // height: var(--size-${props => props.size});
  //flex-basis: var(--size-${props => props.size});
  //line-height: var(--size-${props => props.size});
  outline: none;
  //position: relative;
  //transition: background 0.1s ease-in-out;
  //width: var(--size-${props => props.size});

  &:active {
    opacity: 0.5;
  }

  &:before {
    border-radius: ${Amount.All};
    //   content: '';
    //   display: flex;
    //   border: 2px solid rgba(var(--color-secondary-rgb), 0.6);
    //   flex: 0;
    //   opacity: 0;
    //   padding: 8px;
    //   position: absolute;
    //   top: -5px;
    //   left: -5px;
    //   right: -5px;
    //   bottom: -5px;
    //   transition: border 0.2s ease-in-out;
  }

  //&:before {
  //  &:after {
  //    opacity: 1;
  //  }
  //}

  /* div {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    position: relative;

    &:before,
    &:after {
      position: absolute;
      background: $ {props => props.iconColor};
      content: '';
      display: inline-block;
      height: calc(100% / 3);
      transition: background 0.1s ease-in-out;
      width: 2px;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  } */
`;
//# sourceMappingURL=CloseButton.js.map