import { jsx as _jsx } from "react/jsx-runtime";
import { CountryCode, CurrencyCode } from '@srclaunch/types';
import { memo } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Size } from '../../../../types';
import { DropdownInput, } from '../../inputs/menu/DropdownInput';
export const CurrencyInput = memo(({ defaultValue = CurrencyCode.UnitedStatesDollar, name = 'language', onChange, placeholder = 'Select a currency', ...props }) => {
    const currencies = [
        {
            icon: {
                component: (_jsx(ReactCountryFlag, { svg: true, countryCode: CountryCode.UnitedStates, style: { height: Size.Smaller, width: 'auto' } }, void 0)),
            },
            label: 'US Dollar (USD)',
            value: CurrencyCode.UnitedStatesDollar,
        },
    ];
    return (_jsx(DropdownInput, { defaultValue: defaultValue, menu: currencies, name: name, onChange: ({ problems, value, validated, }) => onChange &&
            onChange({
                problems,
                validated,
                value,
            }), placeholder: placeholder, ...props }, void 0));
});
//# sourceMappingURL=CurrencyInput.js.map