import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Align } from '../../types';
import { Container } from './Container';
export const AlignRight = memo(({ children, ...props }) => {
    return (_jsx(Container, { alignItems: Align.Right, className: "right", ...props, children: children }, void 0));
});
//# sourceMappingURL=AlignRight.js.map