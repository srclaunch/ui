import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import styled from 'styled-components';
import { Container } from '../layout/Container';
import { DimensionStyles } from '../../styles/appearance/dimension';
export const Video = memo(({ className = '', height = '100%', url, width = '100%', ...props }) => {
    return (_jsx(Container, { className: `${className} video`, ...props, children: _jsx(VideoElement, { height: height, src: url, width: width, ...props }, void 0) }, void 0));
});
const VideoElement = styled.video `
  ${DimensionStyles};
`;
//# sourceMappingURL=Video.js.map