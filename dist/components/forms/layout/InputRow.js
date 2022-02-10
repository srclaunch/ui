import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Container } from '../../layout/Container';
import { Amount, Orientation } from '../../../types';
export const InputRow = memo(({ children, className = '', grow = false, marginBottom = Amount.More, orientation = Orientation.Vertical, ...props }) => {
    return (_jsx(Container, { className: `${className} input-row`, grow: grow, marginBottom: marginBottom, orientation: orientation, ...props, children: children }, void 0));
});
//# sourceMappingURL=InputRow.js.map