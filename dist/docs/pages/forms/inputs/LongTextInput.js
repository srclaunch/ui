import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, BackgroundColors } from '../../../../types';
import { Documentation } from '../../../layouts/Documentation';
import { Workspace } from '../../../../components/containers/Workspace';
import { LongTextInput } from '../../../../components/forms/inputs/text/LongTextInput';
import { Container } from '../../../../components/layout/Container';
import { InputLabel } from '../../../../components/forms/labels/InputLabel';
import { InputRow } from '../../../../components/forms/layout/InputRow';
export const LongTextInputPage = memo(() => {
    return (_jsx(Workspace, { header: {
            title: 'LongTextInput',
        }, layout: Documentation, title: "LongTextInput", children: _jsx(Container, { backgroundColor: BackgroundColors.Lightest, borderRadius: Amount.More, grow: false, padding: Amount.Most, children: _jsxs(InputRow, { children: [_jsx(InputLabel, { children: "Example" }, void 0), _jsx(LongTextInput, {}, void 0)] }, void 0) }, void 0) }, void 0));
});
//# sourceMappingURL=LongTextInput.js.map