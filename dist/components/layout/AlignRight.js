import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Container } from './Container';
import { Align } from '../../types';
export const AlignRight = memo(({ children, ...props }) => {
    return (_jsx(Container, { alignItems: Align.Right, className: "right", ...props, children: children }, void 0));
});
//# sourceMappingURL=AlignRight.js.map