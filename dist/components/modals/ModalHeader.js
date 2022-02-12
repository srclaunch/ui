import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Align, Amount, Orientation } from '../../types';
import { Container } from '../layout/Container';
import { MoreMenu } from '../menus/MoreMenu';
import { Title } from '../typography/Title';
import { CloseButton } from './CloseButton';
export const ModalHeader = memo(({ alignItems = Align.Center, className = '', onCloseClick, marginBottom = Amount.Most, moreMenu, orientation = Orientation.Horizontal, padding = Amount.Default, title, }) => {
    return (_jsxs(Container, { alignItems: alignItems, className: `${className} modal-header`, grow: false, flat: true, marginBottom: marginBottom, orientation: orientation, padding: padding, children: [_jsx(Title, { children: title }, void 0), _jsx(Container, {}, void 0), moreMenu && _jsx(MoreMenu, { alignContent: Align.Right, ...moreMenu }, void 0), _jsx(CloseButton, { marginLeft: Amount.Less, onClick: onCloseClick }, void 0)] }, void 0));
});
//# sourceMappingURL=ModalHeader.js.map