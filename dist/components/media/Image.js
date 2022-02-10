import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import styled from 'styled-components';
import { DimensionStyles } from '../../styles/appearance/dimension';
import { AppearanceStyles } from '../../styles/appearance/index';
import { LayoutStyles } from '../../styles/layout';
const Img = styled.img `
  ${LayoutStyles};
  ${AppearanceStyles};
  ${DimensionStyles};
`;
export const Image = memo(({ alt, className = '', description, height = 'auto', path, url, width = 'auto', ...props }) => {
    return (_jsx(Img, { alt: alt ?? description, className: `${className} image`, height: height, src: path ?? url, width: width, ...props }, void 0));
});
//# sourceMappingURL=Image.js.map