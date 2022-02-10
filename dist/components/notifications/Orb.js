import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, BackgroundColors, Size } from '../../types';
import { Container } from '../layout/Container';
export const Orb = memo(({ color = BackgroundColors.Default, className = '', size = Size.Smallest, ...props }) => {
    return (_jsx(Container, { className: `${className} orb`, backgroundColor: color, borderRadius: Amount.All, height: size, width: size, ...props }, void 0));
});
//# sourceMappingURL=Orb.js.map