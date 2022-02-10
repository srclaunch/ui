import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Container } from '../layout/Container';
import { Align, Amount, Orientation } from '../../types';
export const FormActions = memo(({ children, ...props }) => {
    return (_jsx(Container, { alignContent: Align.SpaceBetween, className: "form-actions", marginTop: Amount.More, orientation: Orientation.Horizontal, grow: false, ...props, children: children }, void 0));
});
//# sourceMappingURL=FormActions.js.map