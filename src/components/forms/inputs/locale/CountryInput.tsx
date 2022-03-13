import { CountryCode, ValidationProblem } from '@srclaunch/types';
import Countries from 'i18n-iso-countries';
import { memo, ReactElement } from 'react';
import ReactCountryFlag from 'react-country-flag';

import { Amount, Sizes } from '../../../../types';
import { DropdownInput, DropdownInputProps } from '../menu/DropdownInput';

export type CountryInputProps = DropdownInputProps<CountryCode>;

export const CountryInput = memo(
  ({
    defaultValue = CountryCode.UnitedStates,
    menu = Object.entries(Countries.getAlpha2Codes()).map(
      ([alpha2, alpha3]) => ({
        icon: {
          component: (
            <ReactCountryFlag
              svg
              countryCode={alpha2}
              style={{ height: Sizes.Smaller, width: 'auto' }}
            />
          ),
        },
        label: Countries.getName(alpha2, 'en', { select: 'official' }),
        value: alpha2 as CountryCode,
      }),
    ),
    name = 'country',
    onChange,
    placeholder = 'Select a country',
    ...props
  }: CountryInputProps): ReactElement => {
    return (
      <DropdownInput
        defaultValue={defaultValue}
        menu={menu}
        name={name}
        onChange={({
          problems,
          value,
          validated,
        }: {
          problems?: readonly ValidationProblem[];
          value?: CountryCode;
          validated?: boolean;
        }) =>
          onChange &&
          (onChange({
            problems,
            validated,
            value,
          }) as CountryInputProps['onChange'])
        }
        placeholder={placeholder}
        {...props}
      />
    );
  },
);
