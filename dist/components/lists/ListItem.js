import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Orientation } from '../../types';
import { Container } from '../layout/Container';
export const ListItem = memo(({ as = 'li', children, ...props }) => {
    return (_jsx(Container, { as: as, style: {
            display: as === 'li' ? 'list-item' : 'flex',
        }, orientation: Orientation.Horizontal, ...props, children: children }, void 0));
});
//# sourceMappingURL=ListItem.js.map