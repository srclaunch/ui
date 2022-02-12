import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import styled from 'styled-components';
import { AppearanceStyles } from '../../styles/appearance';
import { DimensionStyles } from '../../styles/appearance/dimension';
import { VisibilityStyles } from '../../styles/appearance/visibility';
import { FocusedStyles } from '../../styles/focused';
import { LayoutStyles } from '../../styles/layout';
import { Align, Orientation, } from '../../types';
const Wrapper = styled.div `
  ${LayoutStyles};
  ${AppearanceStyles};
  ${FocusedStyles};
  ${DimensionStyles};
  ${VisibilityStyles};
`;
export const Container = memo(({ alignItems = Align.Stretch, as = 'div', children, className = '', fadeIn = false, grow = true, orientation = Orientation.Vertical, ...props }) => {
    return (_jsx(Wrapper, { alignItems: alignItems, as: as, className: `${className} container`, fadeIn: fadeIn, grow: grow, orientation: orientation, ...props, children: children }, void 0));
});
//# sourceMappingURL=Container.js.map