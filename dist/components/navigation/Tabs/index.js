import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { memo, useState } from 'react';
import styled, { css } from 'styled-components';
import { FocusedStyles } from '../../../styles/focused';
import { Align, Amount, BackgroundColors, BorderColors, DepthShadow, Orientation, TextColors, } from '../../../types';
import { Container } from '../../layout/Container';
import { Label } from '../../typography/Label';
export const Tabs = memo(({ borderRadius = Amount.More, className = '', children, }) => {
    let initialIndex = 0;
    // @ts-ignore
    React.Children.forEach(children, (child, key) => {
        // @ts-ignore
        if (child.props?.selected)
            initialIndex = key;
    });
    const [currentTabIndex, setTabIndex] = useState(initialIndex);
    return (_jsxs(Container, { alignContent: Align.Stretch, className: `${className} tabs`, orientation: Orientation.Vertical, children: [_jsx(Container, { alignContent: Align.Center, marginBottom: Amount.Default, orientation: Orientation.Horizontal, grow: false, children: React.Children.map(children, (c, key) => {
                    if (c.props.visible === false)
                        return null;
                    return (_jsx(TabButton, { className: c.props.className, current: currentTabIndex === key, onClick: () => {
                            setTabIndex(key);
                            if (c.props.onClick && typeof c.props.onClick === 'function')
                                c.props.onClick();
                        }, children: _jsx(Label, { textColor: currentTabIndex === key
                                ? TextColors.Primary
                                : TextColors.Default, children: c.props.label }, void 0) }, key));
                }) }, void 0), _jsx(Container, { alignContent: Align.Top, backgroundColor: BackgroundColors.Default, borderRadius: borderRadius, boxShadow: DepthShadow.Highest, className: "tab-content", grow: false, orientation: Orientation.Vertical, padding: Amount.Most, paddingLeft: Amount.All, paddingRight: Amount.All, children: React.Children.map(children, (c, key) => {
                    if (key !== currentTabIndex)
                        return null;
                    // @ts-ignore
                    return React.cloneElement(c);
                }) }, void 0)] }, void 0));
});
const TabButton = styled.button `
  ${FocusedStyles};

  background: transparent;
  border: none;
  border-bottom: 3px solid rgba(${BorderColors.Light}, 0.5);
  color: var(--text-color-light);
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  height: var(--amount-all);
  line-height: var(--amount-all);
  padding: 0 var(--amount-default);
  position: relative;
  text-align: center;
  transition: background 0.2s ease-out, border 0.2s ease-out,
    color 0.2s ease-out;
  user-select: none;

  &:before {
    border-radius: ${Amount.Least};
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
  }

  * {
    cursor: pointer;
  }

  ${props => props.current &&
    css `
      border-bottom: 3px solid var(--color-primary);
      font-weight: 700;
    `}
`;
//# sourceMappingURL=index.js.map