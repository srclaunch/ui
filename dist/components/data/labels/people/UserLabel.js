import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { BasicIcons } from '@srclaunch/icons';
import { NavigationLink } from '../../../navigation/NavigationLink';
import { PersonLabel } from './PersonLabel';
import { Amount, BackgroundColors, Orientation, Size, TextSize, } from '../../../../types';
import { MoreMenu } from '../../../menus/MoreMenu';
import { Icon } from '../../../media/Icon';
import { convertSizeToAmount } from '../../../../lib/proportions/conversions';
import { getSmallerAmount } from '../../../../lib/proportions/amount';
export const UserLabel = memo(({ className = '', to, id, menu = {
    menu: [
        {
            label: 'Send message',
            onClick: () => {
                console.log('sendEmail');
            },
        },
        { label: 'View Profile', to: `/people/${id}` },
    ],
}, messageIcon = {
    name: BasicIcons.BillEnvelope,
}, name, image, size = Size.Default, textSize = TextSize.Default, }) => {
    return (_jsxs(NavigationLink, { borderRadius: Amount.All, className: `${className} user-label`, active: {
            backgroundColor: BackgroundColors.Primary,
            backgroundOpacity: 100,
        }, hover: {
            backgroundColor: BackgroundColors.Primary,
            backgroundOpacity: 90,
        }, orientation: Orientation.Horizontal, padding: getSmallerAmount(convertSizeToAmount(size)), paddingTop: getSmallerAmount(convertSizeToAmount(size)), paddingBottom: getSmallerAmount(convertSizeToAmount(size)), to: to ?? `/people/${id}`, style: {
            position: 'relative',
            zIndex: 5,
        }, children: [_jsx(PersonLabel, { name: name, image: image, lineHeight: size, size: size, textSize: textSize }, void 0), messageIcon && _jsx(Icon, { grow: false, size: size, ...messageIcon }, void 0), menu && _jsx(MoreMenu, { ...menu }, void 0)] }, void 0));
});
//# sourceMappingURL=UserLabel.js.map