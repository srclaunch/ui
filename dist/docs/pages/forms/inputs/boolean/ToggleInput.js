import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Workspace } from '../../../../../components/containers/Workspace';
import { ToggleInput } from '../../../../../components/forms/inputs/boolean/ToggleInput';
import { InputLabel } from '../../../../../components/forms/labels/InputLabel';
import { InputRow } from '../../../../../components/forms/layout/InputRow';
import { Container } from '../../../../../components/layout/Container';
import { Amount, BackgroundColors } from '../../../../../types';
import { Documentation } from '../../../../layouts/Documentation';
export const ToggleInputPage = memo(() => {
    return (_jsx(Workspace, { header: {
            title: 'ToggleInput',
        }, layout: Documentation, title: "ToggleInput", children: _jsx(Container, { backgroundColor: BackgroundColors.Lightest, borderRadius: Amount.More, padding: Amount.More, children: _jsxs(InputRow, { children: [_jsx(InputLabel, { children: "Example" }, void 0), _jsx(ToggleInput, { onChange: () => { } }, void 0)] }, void 0) }, void 0) }, void 0));
});
//# sourceMappingURL=ToggleInput.js.map