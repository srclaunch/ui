import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Container } from './Container';
import { Align } from '../../types';
export const AlignLeft = memo(({ children, ...props }) => {
    return (_jsx(Container, { alignItems: Align.Left, className: "align-left", ...props, children: children }, void 0));
});
//# sourceMappingURL=AlignLeft.js.map