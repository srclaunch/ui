import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import styled from 'styled-components';
import { AnimationStyles } from '../../styles/animation';
import { BorderRadiusStyles } from '../../styles/appearance/border-radius';
import { DimensionStyles } from '../../styles/appearance/dimension';
import { MarginStyles } from '../../styles/layout/margin';
const Img = styled.img `
  ${AnimationStyles};
  ${DimensionStyles};
  ${BorderRadiusStyles};
  ${MarginStyles};
`;
export const Image = memo(({ alt, className = '', description, height = 'auto', path, url, width = 'auto', ...props }) => {
    return (_jsx(Img, { alt: alt ?? description, className: `${className} image`, height: height, src: path ?? url, width: width, ...props }, void 0));
});
//# sourceMappingURL=Image.js.map