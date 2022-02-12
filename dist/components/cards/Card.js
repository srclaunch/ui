import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import styled from 'styled-components';
import { AppearanceStyles } from '../../styles/appearance';
import { DimensionStyles } from '../../styles/appearance/dimension';
import { LayoutStyles } from '../../styles/layout';
import { Amount, BackgroundColors, DepthShadow, Orientation, } from '../../types';
import { ErrorBoundary } from '../errors/ErrorBoundary';
import { Container } from '../layout/Container';
import { NavigationLink } from '../navigation/NavigationLink';
export const Card = memo(({ backgroundColor = BackgroundColors.Card, borderRadius = Amount.Less, boxShadow = DepthShadow.Higher, children, draggable = false, id, linkTo, onClick, title, width, ...props }) => {
    const content = (_jsxs(Container, { borderRadius: borderRadius, boxShadow: boxShadow, className: `card${id ? `-${id}` : ''}`, grow: true, onClick: onClick, width: linkTo ? '100%' : width ?? 'auto', ...props, children: [title && _jsx("h4", { children: title }, void 0), _jsx(ErrorBoundary, { children: children }, void 0)] }, void 0));
    if (draggable) {
        return (_jsx(DragWrapper, { className: "draggable-card", ...props, children: content }, void 0));
    }
    if (linkTo) {
        return (_jsx(NavigationLink, { borderRadius: borderRadius, grow: true, orientation: Orientation.Vertical, to: linkTo, width: width, children: content }, void 0));
    }
    return content;
});
const DragWrapper = styled.div `
  ${LayoutStyles};
  ${AppearanceStyles};
  ${DimensionStyles};

  //position: absolute;
  //margin: 0 0 25px 0;
  transition: box-shadow 0.3s ease-in-out;
  //width: 100%;
`;
//# sourceMappingURL=Card.js.map