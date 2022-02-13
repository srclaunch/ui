import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Workspace } from '../../../../../components/containers/Workspace';
import { ImageInput } from '../../../../../components/forms/inputs/media/ImageInput';
import { Paragraph } from '../../../../../components/typography/Paragraph';
import { Amount } from '../../../../../types';
import { Documentation } from '../../../../layouts/Documentation';
export const ImageInputPage = memo(() => {
    return (_jsxs(Workspace, { header: { title: 'ImageInput' }, layout: Documentation, title: "ImageInput", children: [_jsxs(Paragraph, { marginBottom: Amount.Most, children: ["The ", _jsx("b", { children: "ImageInput" }, void 0), " component allows a user to select an image from their computer to upload."] }, void 0), _jsx(ImageInput, { onChange: () => { }, width: 260 }, void 0)] }, void 0));
});
//# sourceMappingURL=ImageInput.js.map