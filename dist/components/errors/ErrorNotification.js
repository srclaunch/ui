import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { NotificationType } from '@srclaunch/types';
import { Align } from '../../types';
import { NotificationLabel, } from '../notifications/NotificationLabel';
export const ErrorNotification = memo(({ label, showOrb = true, ...props }) => {
    return (_jsx(NotificationLabel, { alignItems: Align.Center, label: label, showOrb: showOrb, type: NotificationType.Error, ...props }, void 0));
});
//# sourceMappingURL=ErrorNotification.js.map