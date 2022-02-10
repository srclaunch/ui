import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import styled from 'styled-components';
import { AppearanceStyles } from '../../styles/appearance';
import { DimensionStyles } from '../../styles/appearance/dimension';
import { LayoutStyles } from '../../styles/layout';
const Wrapper = styled.span `
  ${LayoutStyles};
  ${AppearanceStyles};
  ${DimensionStyles};

  svg {
    height: 100%;
    width: 100%;
  }
`;
export const Svg = memo(({ as = 'span', children, className = '', ...props }) => {
    return (_jsx(Wrapper, { as: as, className: `${className} svg`, ...props, children: children }, void 0));
});
//# sourceMappingURL=Svg.js.map