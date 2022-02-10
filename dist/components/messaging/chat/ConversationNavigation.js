import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DualLightIcons } from '@srclaunch/icons';
import { useNavigate } from '@srclaunch/web-application-state';
import { memo } from 'react';
import { Align, Amount, BackgroundColors, Size, } from '../../../types';
import { Button, ButtonType } from '../../forms/buttons/Button';
import { Container } from '../../layout/Container';
import { NavigationMenu } from '../../navigation/NavigationMenu';
export const ConversationNavigation = memo(({ ...props }) => {
    const navigate = useNavigate();
    return (_jsxs(Container, { ...props, children: [_jsx(Button, { alignContent: Align.Center, borderRadius: Amount.Least, fullWidth: true, grow: false, icon: {
                    name: DualLightIcons.AddCircle,
                    size: Size.Small,
                }, marginBottom: Amount.Default, onClick: () => navigate('/messages/new'), size: Size.Large, type: ButtonType.Primary, children: "New Message" }, void 0), _jsx(NavigationMenu, { backgroundColor: BackgroundColors.Transparent, menu: [
                    {
                        icon: {
                            name: DualLightIcons.Inbox,
                            size: Size.Small,
                        },
                        label: 'Inbox',
                        to: '/messages/inbox',
                    },
                    {
                        icon: {
                            name: DualLightIcons.Star,
                            size: Size.Small,
                        },
                        label: 'Starred',
                        to: '/messages/starred',
                    },
                    {
                        icon: {
                            name: DualLightIcons.Send,
                            size: Size.Small,
                        },
                        label: 'Sent',
                        to: '/messages/sent',
                    },
                    {
                        icon: {
                            name: DualLightIcons.Note,
                            size: Size.Small,
                        },
                        label: 'Drafts',
                        to: '/messages/drafts',
                    },
                    {
                        icon: {
                            name: DualLightIcons.Trash,
                            size: Size.Small,
                        },
                        label: 'Trash',
                        to: '/messages/trash',
                    },
                ] }, void 0)] }, void 0));
});
//# sourceMappingURL=ConversationNavigation.js.map