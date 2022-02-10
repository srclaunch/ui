import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { NotificationLabel } from '../notifications/NotificationLabel';
import { NotificationType } from '@srclaunch/types';
export const ConnectionStatus = memo(({ ...props }) => {
    return (_jsx(NotificationLabel, { type: NotificationType.Success, label: 'Connected', ...props }, void 0));
});
//# sourceMappingURL=ConnectionStatus.js.map