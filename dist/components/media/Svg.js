import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import styled from 'styled-components';
import { DimensionStyles } from '../../styles/appearance/dimension';
const SvgMedia = styled.svg `
  ${DimensionStyles};
`;
export const Svg = memo(({ as = 'span', className = '', ...props }) => {
    return _jsx(SvgMedia, { as: as, className: `${className} svg`, ...props }, void 0);
});
//# sourceMappingURL=Svg.js.map