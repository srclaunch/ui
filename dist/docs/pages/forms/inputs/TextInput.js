import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Documentation } from '../../../layouts/Documentation';
import { Workspace } from '../../../../components/containers/Workspace';
import { InputRow } from '../../../../components/forms/layout/InputRow';
import { InputLabel } from '../../../../components/forms/labels/InputLabel';
import { TextInput } from '../../../../components/forms/inputs/text/TextInput';
export const TextInputPage = memo(() => {
    return (_jsx(Workspace, { header: {
            title: 'TextInput',
        }, layout: Documentation, title: "TextInput", children: _jsxs(InputRow, { children: [_jsx(InputLabel, { children: "Example" }, void 0), _jsx(TextInput, { onChange: () => { } }, void 0)] }, void 0) }, void 0));
});
//# sourceMappingURL=TextInput.js.map