import { jsx as _jsx } from "react/jsx-runtime";
import { CountryCode } from '@srclaunch/types';
import Countries from 'i18n-iso-countries';
import { memo } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Size } from '../../../../types';
import { DropdownInput } from '../menu/DropdownInput';
export const CountryInput = memo(({ defaultValue = CountryCode.UnitedStates, menu = Object.entries(Countries.getAlpha2Codes()).map(([alpha2, alpha3]) => ({
    icon: {
        component: (_jsx(ReactCountryFlag, { svg: true, countryCode: alpha2, style: { height: Size.Smaller, width: 'auto' } }, void 0)),
    },
    label: Countries.getName(alpha2, 'en', { select: 'official' }),
    value: alpha2,
})), name = 'country', onChange, placeholder = 'Select a country', ...props }) => {
    return (_jsx(DropdownInput, { defaultValue: defaultValue, menu: menu, name: name, onChange: ({ problems, value, validated, }) => onChange &&
            onChange({
                problems,
                validated,
                value,
            }), placeholder: placeholder, ...props }, void 0));
});
//# sourceMappingURL=CountryInput.js.map