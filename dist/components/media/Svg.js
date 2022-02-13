import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import styled from 'styled-components';
import { DimensionStyles } from '../../styles/appearance/dimension';
import { MarginStyles } from '../../styles/layout/margin';
import { Size, } from '../../types';
const SvgMedia = styled.svg `
  ${DimensionStyles};
  ${MarginStyles};
  align-items: center;
  display: flex;
  justify-content: center;

  svg {
    fill: rgb(${props => props.color});
  }
`;
export const Svg = memo(({ as = 'span', children, className = '', size = Size.Small, ...props }) => {
    return (_jsx(SvgMedia, { as: as, className: `${className} svg`, size: size, ...props, children: children }, void 0));
});
//# sourceMappingURL=Svg.js.map