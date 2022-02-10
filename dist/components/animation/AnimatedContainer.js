import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Container } from '../layout/Container';
export const AnimatedContainer = memo(({ children, ...props }) => {
    return _jsx(Container, { ...props, children: children }, void 0);
});
//# sourceMappingURL=AnimatedContainer.js.map