import { memo, ReactElement } from 'react';
import { Condition, PhoneNumber } from '@srclaunch/types';

import { AutoComplete, InputValueChangeHandler } from '../../../../types';
import { TextInput, TextInputProps } from '../text/TextInput';

type PhoneNumberInputProps<T = {}> = TextInputProps<
  HTMLInputElement,
  PhoneNumber,
  {
    autoComplete?: AutoComplete.PhoneNumber;
  }
> &
  T;

export const PhoneNumberInput = memo(
  ({ ...props }: PhoneNumberInputProps): ReactElement => {
    return (
      <TextInput validation={{ [Condition.IsPhoneNumber]: true }} {...props} />
    );
  },
);
