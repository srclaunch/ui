import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useEffect, useState } from 'react';
import { logout, useDispatch, useSelector } from '@srclaunch/state';
import { BasicIcons } from '@srclaunch/icons';
import { Colors, Size, TextColors } from '../../types';
import { MenuButton } from '../forms/buttons/MenuButton';
import { ErrorLabel } from '../errors/ErrorLabel';
export const UserMenu = memo(({ onLogoutSuccess }) => {
    const [loggingOut, setLoggingOut] = useState(false);
    const dispatch = useDispatch();
    const attributes = useSelector((state) => state.user.details.attributes);
    const loggedIn = useSelector((state) => state.user.authentication.state.loggedIn);
    useEffect(() => {
        if (loggingOut && !loggedIn) {
            if (onLogoutSuccess)
                onLogoutSuccess();
        }
    }, [loggedIn]);
    if (!loggedIn) {
        return _jsx(ErrorLabel, { children: "Not logged in" }, void 0);
    }
    return (_jsx(MenuButton, { menu: [
            {
                icon: {
                    name: BasicIcons.GearCog,
                    size: Size.Smaller,
                },
                label: 'Settings',
                to: '/settings',
            },
            {
                icon: {
                    color: Colors.Error,
                    name: BasicIcons.Exit,
                    size: Size.Smaller,
                },
                label: 'Logout',
                onClick: () => {
                    setLoggingOut(true);
                    dispatch(logout());
                },
                textColor: TextColors.Error,
            },
        ], label: `${attributes?.given_name} ${attributes?.family_name}` }, void 0));
});
//# sourceMappingURL=UserMenu.js.map