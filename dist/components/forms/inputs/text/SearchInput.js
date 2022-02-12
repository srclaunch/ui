import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { BasicIcons } from '@srclaunch/icons';
import { Size } from '../../../../types';
import { TextInput, TextInputType } from './TextInput';
export const SearchInput = memo(({ onChange, ...props }) => {
    return (_jsx(TextInput, { icon: {
            name: BasicIcons.Search,
            size: Size.Smaller,
        }, inputType: TextInputType.Search, onChange: onChange, spellCheck: false, ...props }, void 0));
});
//# sourceMappingURL=SearchInput.js.map