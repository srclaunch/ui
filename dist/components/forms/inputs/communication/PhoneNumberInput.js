import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Condition } from '@srclaunch/types';
import { TextInput } from '../text/TextInput';
export const PhoneNumberInput = memo(({ ...props }) => {
    return (_jsx(TextInput, { validation: { [Condition.IsPhoneNumber]: true }, ...props }, void 0));
});
//# sourceMappingURL=PhoneNumberInput.js.map