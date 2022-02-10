import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeProvider } from '@srclaunch/themes';
import { Outlet, useSelector, } from '@srclaunch/web-application-state';
import { memo } from 'react';
import { useAuthentication } from '../../hooks/use-authentication';
import { BackgroundColors } from '../../types';
import { EntityPanel } from '../data/entities/EntityPanel';
import { Container } from '../layout/Container';
import { Backdrop } from '../modals/Backdrop';
import { LoadingOverlay } from '../progress/LoadingOverlay';
export const WebApplication = memo(({ authentication = false, actions, backgroundColor = BackgroundColors.Dark, children, className = '', httpClient, ...props }) => {
    const { inProgress, loggedIn, loginRequired } = useAuthentication({
        enabled: authentication,
    });
    const { current, list } = useSelector((state) => state.ui.themes);
    const showOutlet = !inProgress &&
        ((loggedIn && (loginRequired || !loginRequired)) ||
            (!loggedIn && !loginRequired));
    return (_jsx(Container, { backgroundColor: backgroundColor, className: `${className} web-application`, ...props, children: _jsxs(ThemeProvider, { theme: current, themes: list, children: [_jsx(LoadingOverlay, { visible: inProgress || !showOutlet }, void 0), _jsx(Backdrop, { visible: false }, void 0), showOutlet && _jsx(Outlet, {}, void 0), _jsx(EntityPanel, { actions: actions, httpClient: httpClient }, void 0)] }, void 0) }, void 0));
});
//# sourceMappingURL=WebApplication.js.map