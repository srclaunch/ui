import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { CountryCode, LanguageCode } from '@srclaunch/types';
import { Size } from '../../../../types';
import { DropdownInput } from '../menu/DropdownInput';
export const LanguageInput = memo(({ defaultValue = LanguageCode.English, name, onChange, placeholder = 'Select a language', ...props }) => {
    const languages = [
        {
            icon: {
                component: (_jsx(ReactCountryFlag, { svg: true, countryCode: CountryCode.UnitedStates, style: { height: Size.Smaller, width: 'auto' } }, void 0)),
            },
            label: 'English (US)',
            value: LanguageCode.English,
        },
    ];
    return (_jsx(DropdownInput, { defaultValue: defaultValue, menu: languages, name: name, onChange: onChange, placeholder: placeholder, ...props }, void 0));
});
//# sourceMappingURL=LanguageInput.js.map