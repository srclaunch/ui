import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Container } from '../../layout/Container';
export const Tab = memo(({ className = '', children, label, onClick }) => {
    return (_jsx(Container, { className: `${className} tab`, "data-label": label, fadeIn: true, children: children }, void 0));
});
//# sourceMappingURL=Tab.js.map