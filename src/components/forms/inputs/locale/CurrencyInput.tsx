import { CountryCode, CurrencyCode, ValidationProblem } from '@srclaunch/types';
import { memo, ReactElement } from 'react';
import ReactCountryFlag from 'react-country-flag';

import { Sizes } from '../../../../types';
import {
  DropdownInput,
  DropdownInputProps,
} from '../../inputs/menu/DropdownInput';

export type CurrencyInputProps = DropdownInputProps<CurrencyCode>;

export const CurrencyInput = memo(
  ({
    defaultValue = CurrencyCode.UnitedStatesDollar,
    name = 'language',
    onChange,
    placeholder = 'Select a currency',
    ...props
  }: CurrencyInputProps): ReactElement => {
    const currencies = [
      {
        icon: {
          component: (
            <ReactCountryFlag
              svg
              countryCode={CountryCode.UnitedStates}
              style={{ height: Sizes.Smaller, width: 'auto' }}
            />
          ),
        },
        label: 'US Dollar (USD)',
        value: CurrencyCode.UnitedStatesDollar,
      },
    ];

    return (
      <DropdownInput
        defaultValue={defaultValue}
        menu={currencies}
        name={name}
        onChange={({
          problems,
          value,
          validated,
        }: {
          problems?: readonly ValidationProblem[];
          value?: CurrencyCode;
          validated?: boolean;
        }) =>
          onChange &&
          (onChange({
            problems,
            validated,
            value,
          }) as CurrencyInputProps['onChange'])
        }
        placeholder={placeholder}
        {...props}
      />
    );
  },
);
