import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Container } from '../layout/Container';
export const OrderedList = memo(({ as = 'ul', children, ...props }) => {
    return (_jsx(Container, { as: as, ...props, children: children }, void 0));
});
//# sourceMappingURL=OrderedList.js.map