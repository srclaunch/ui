import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { memo } from 'react';
import { useTitle } from '@srclaunch/hooks';
import { Container } from '../layout/Container';
import { Title } from '../typography/Title';
import { SubTitle } from '../typography/SubTitle';
import { LoadingOverlay } from '../progress/LoadingOverlay';
import { Align, Amount, BackgroundColors, Orientation, } from '../../types';
export const Workspace = memo(({ alignContent = Align.Top, backgroundColor = BackgroundColors.Workspace, className = '', children, header, layout: Layout, loading = false, loginRequired = false, orientation = Orientation.Vertical, padding = Amount.Most, title, ...props }) => {
    useTitle(title);
    const headerTitle = header?.title ? (typeof header.title === 'string' ? (_jsx(Title, { marginTop: Amount.None, children: header.title }, void 0)) : (header.title)) : null;
    const WorkspaceComp = (props2) => (_jsxs(Container, { alignContent: alignContent, backgroundColor: backgroundColor, className: `${className} workspace`, grow: true, orientation: orientation, padding: padding, scrollable: true, ...props, ...props2, children: [(header?.title || header?.actions) && (_jsxs(Container, { alignItems: Align.Center, grow: false, marginBottom: Amount.All, orientation: Orientation.Horizontal, children: [_jsxs(Container, { children: [_jsx(Container, { alignItems: Align.Center, className: "workspace-title", orientation: Orientation.Horizontal, children: headerTitle }, void 0), _jsx(Container, { className: "workspace-sub-title", orientation: Orientation.Horizontal, children: header?.subTitle && (_jsx(SubTitle, { marginTop: Amount.None, children: header.subTitle }, void 0)) }, void 0)] }, void 0), header?.actions && (_jsx(Container, { className: "workspace-actions", children: header.actions }, void 0))] }, void 0)), _jsx(LoadingOverlay, { visible: loading }, void 0), children] }, void 0));
    const Child = () => Layout ? (React.cloneElement(_jsx(Layout, { scrollable: true, ...props }, void 0), props, _jsx(WorkspaceComp, { ...props }, void 0))) : (_jsx(WorkspaceComp, { ...props }, void 0));
    return _jsx(Child, {}, void 0);
});
//# sourceMappingURL=Workspace.js.map