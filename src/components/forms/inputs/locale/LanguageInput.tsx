import { memo, ReactElement } from 'react';

import ReactCountryFlag from 'react-country-flag';
import { CountryCode, LanguageCode, ValidationProblem } from '@srclaunch/types';

import { Sizes } from '../../../../types';
import { DropdownInput, DropdownInputProps } from '../menu/DropdownInput';

export type LanguageInputProps = DropdownInputProps<LanguageCode>;

export const LanguageInput = memo(
  ({
    defaultValue = LanguageCode.English,
    name,
    onChange,
    placeholder = 'Select a language',
    ...props
  }: LanguageInputProps): ReactElement => {
    const languages = [
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
        label: 'English (US)',
        value: LanguageCode.English,
      },
    ];

    return (
      <DropdownInput
        defaultValue={defaultValue}
        menu={languages}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    );
  },
);
