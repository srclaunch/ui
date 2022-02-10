import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BasicIcons } from '@srclaunch/icons';
import { logout, useDispatch, useSelector, } from '@srclaunch/web-application-state';
import { memo, useEffect } from 'react';
import { Size, TextColors } from '../../types';
import { Button } from '../forms/buttons/Button';
import { Icon } from '../media/Icon';
import { Label } from '../typography/Label';
export const LogoutButton = memo(({ icon, onLogoutSuccess, label, showArrow = false, textColor = TextColors.Error, ...props }) => {
    const dispatch = useDispatch();
    const loggedIn = useSelector((state) => state.authentication.loggedIn);
    useEffect(() => {
        if (!loggedIn && onLogoutSuccess)
            onLogoutSuccess();
    }, [loggedIn]);
    return (_jsxs(Button, { onClick: () => dispatch(logout()), ...props, children: [icon && _jsx(Icon, { ...icon }, void 0), _jsx(Label, { textColor: textColor, size: Size.Small, children: label ?? 'Logout' }, void 0), showArrow && (_jsx(Icon, { color: textColor, name: BasicIcons.ChevronRight, size: Size.Small }, void 0))] }, void 0));
});
//# sourceMappingURL=LogoutButton.js.map