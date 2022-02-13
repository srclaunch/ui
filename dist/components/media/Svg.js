import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import styled from 'styled-components';
import { DimensionStyles } from '../../styles/appearance/dimension';
import { MarginStyles } from '../../styles/layout/margin';
const SvgMedia = styled.svg `
  ${DimensionStyles};
  ${MarginStyles};
  fill: ${props => props.color};
`;
export const Svg = memo(({ as = 'span', children, className = '', ...props }) => {
    return (_jsx(SvgMedia, { as: as, className: `${className} svg`, ...props, children: children }, void 0));
});
//# sourceMappingURL=Svg.js.map