import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount } from '../../../../types';
import { Workspace } from '../../../../components/containers/Workspace';
import { Documentation } from '../../../layouts/Documentation';
import { Paragraph } from '../../../../components/typography/Paragraph';
import { CountryInput } from '../../../../components/forms/inputs/locale/CountryInput';
export const CountryInputPage = memo(() => {
    return (_jsxs(Workspace, { header: { title: 'CountryInput' }, layout: Documentation, title: "CountryInput", children: [_jsxs(Paragraph, { marginBottom: Amount.Most, children: ["The ", _jsx("b", { children: "CountryInput" }, void 0), " component is used to select a country from a list of countries."] }, void 0), _jsx(CountryInput, { onChange: () => { }, width: 260 }, void 0)] }, void 0));
});
//# sourceMappingURL=CountryInput.js.map