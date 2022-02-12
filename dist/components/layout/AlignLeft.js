import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Align } from '../../types';
import { Container } from './Container';
export const AlignLeft = memo(({ children, ...props }) => {
    return (_jsx(Container, { alignItems: Align.Left, className: "align-left", ...props, children: children }, void 0));
});
//# sourceMappingURL=AlignLeft.js.map