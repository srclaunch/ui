import { jsx as _jsx } from "react/jsx-runtime";
import { NotificationType, Primitives } from '@srclaunch/types';
import { memo } from 'react';
import { NotificationLabel } from '../../../notifications/NotificationLabel';
import { InputLabel } from '../../labels/InputLabel';
// import Menu from '../ui/Menu';
import { InputRow } from '../../layout/InputRow';
export const DynamicInput = memo(({ label, type }) => {
    const getInputComponentByType = () => {
        switch (type) {
            case Primitives.String:
                return (_jsx(InputRow, { children: _jsx(InputLabel, { children: label }, void 0) }, void 0));
            case Primitives.Menu:
                return (_jsx(InputRow, {}, void 0));
            default:
                return (_jsx(NotificationLabel, { type: NotificationType.Error, children: `Unimplemented field type! ${label} : ${type}` }, void 0));
        }
    };
    return getInputComponentByType();
});
//# sourceMappingURL=DynamicInput.js.map