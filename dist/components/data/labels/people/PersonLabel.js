import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { getSmallerAmount } from '../../../../lib/proportions/amount';
import { convertSizeToAmount } from '../../../../lib/proportions/conversions';
import { Align, Amount, Orientation, Size, TextSize, TextWeight, } from '../../../../types';
import { Container } from '../../../layout/Container';
import { Image } from '../../../media/Image';
import { Label } from '../../../typography/Label';
export const PersonLabel = memo(({ image, name, size = Size.Default, textSize = TextSize.Large, ...props }) => {
    return (_jsxs(Container, { alignItems: Align.Center, orientation: Orientation.Horizontal, ...props, children: [_jsx(Image, { borderRadius: Amount.All, marginRight: getSmallerAmount(convertSizeToAmount(size)), path: image?.path, url: image?.url, size: size }, void 0), _jsx(Label, { lineHeight: getSmallerAmount(convertSizeToAmount(size)), textWeight: TextWeight.More, textSize: textSize, children: name }, void 0)] }, void 0));
});
//# sourceMappingURL=PersonLabel.js.map