import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Size } from '../../types';
import { Container } from '../layout/Container';
export const LineBreak = memo(({ className = '', size = Size.Default, ...props }) => {
    return (_jsx(Container, { className: `${className} link-break`, height: size, ...props }, void 0));
});
//# sourceMappingURL=LineBreak.js.map