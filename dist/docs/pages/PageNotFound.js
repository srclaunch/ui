import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Align, Page, Paragraph, Title } from '../../index';
// import { PageRole } from '@srclaunch/types';
// import NotAuthenticated from '../layouts/NotAuthenticated';
// import styled from 'styled-components';
import { Documentation } from '../layouts/Documentation';
export const PageNotFound = memo(() => {
    return (_jsxs(Page, { alignContent: Align.Center, alignItems: Align.Center, layout: Documentation, title: "AppLab - Page not found", children: [_jsx(Title, { children: "Page Not Found" }, void 0), _jsx(Paragraph, { children: "We couldn't find the page you're looking for. " }, void 0)] }, void 0));
});
//# sourceMappingURL=PageNotFound.js.map