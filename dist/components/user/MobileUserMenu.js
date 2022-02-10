import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icons } from '@srclaunch/icons';
import { logout, useDispatch } from '@srclaunch/state';
import { Orientation } from '@srclaunch/types';
import { NavLink } from 'react-router-dom';
import Container from '../layout/Container';
import Icon from '../ui/Icon';
const MobileUserMenu = () => {
    const dispatch = useDispatch();
    return (_jsx(Container, { orientation: Orientation.Horizontal, children: _jsxs("ul", { children: [_jsx("li", { children: _jsxs(NavLink, { to: "/settings", activeClassName: "current", children: [_jsx(Icon, { name: Icons.GearCog }, void 0), _jsx("span", { children: "Settings" }, void 0)] }, void 0) }, void 0), _jsx("li", { children: _jsxs("button", { onClick: () => dispatch(logout()), onKeyPress: key => {
                            if (key === 'Enter') {
                                dispatch(logout());
                            }
                        }, children: [_jsx(Icon, { name: Icons.Exit }, void 0), _jsx("span", { children: "Logout" }, void 0)] }, void 0) }, void 0)] }, void 0) }, void 0));
};
export default MobileUserMenu;
//# sourceMappingURL=MobileUserMenu.js.map