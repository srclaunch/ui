import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { useNavigate } from '@srclaunch/state';
import { Align, Amount, BackgroundColors, BorderColors, BorderStyle, Orientation, } from '../../types';
import { Container } from '../../components/layout/Container';
import { UserMenu } from '../../components/user/UserMenu';
export const NavigationBar = memo(({ backgroundColor = BackgroundColors.NavigationBar, logo, }) => {
    const navigate = useNavigate();
    return (_jsxs(Container, { backgroundColor: backgroundColor, border: {
            bottom: {
                color: BorderColors.Dark,
                style: BorderStyle.Solid,
                width: 1,
            },
        }, grow: false, orientation: Orientation.Horizontal, padding: Amount.Default, paddingLeft: Amount.More, paddingRight: Amount.Most, children: [_jsx(Container, { alignItems: Align.Center, grow: false, orientation: Orientation.Horizontal, children: logo }, void 0), _jsx(Container, {}, void 0), _jsx(Container, { alignContent: Align.Center, width: 200, children: _jsx(UserMenu, { onLogoutSuccess: () => navigate('/login') }, void 0) }, void 0)] }, void 0));
});
//# sourceMappingURL=NavigationBar.js.map