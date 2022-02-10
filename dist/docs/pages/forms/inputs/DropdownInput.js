import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount } from '../../../../types';
import { Workspace } from '../../../../components/containers/Workspace';
import { Documentation } from '../../../layouts/Documentation';
import { Paragraph } from '../../../../components/typography/Paragraph';
import { DropdownInput } from '../../../../components/forms/inputs/menu/DropdownInput';
export const DropdownInputPage = memo(() => {
    return (_jsxs(Workspace, { header: { title: 'DropdownInput' }, layout: Documentation, title: "DropdownInput", children: [_jsxs(Paragraph, { marginBottom: Amount.Most, children: ["The ", _jsx("b", { children: "DropdownInput" }, void 0), " component is used to display a dropdown menu."] }, void 0), _jsx(DropdownInput, { menu: [
                    {
                        label: 'Item 1',
                        value: 'item1',
                    },
                    {
                        label: 'Item 2',
                        value: 'item2',
                    },
                    {
                        label: 'Item 3',
                        value: 'item3',
                    },
                ], placeholder: "Choose an item", width: 200 }, void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0), _jsx(DropdownInput, { menu: [
                    {
                        label: 'Item 1',
                        value: 'item1',
                    },
                    {
                        label: 'Item 2',
                        value: 'item2',
                    },
                    {
                        label: 'Item 3',
                        value: 'item3',
                    },
                ], placeholder: "Choose an item", width: 200 }, void 0)] }, void 0));
});
//# sourceMappingURL=DropdownInput.js.map