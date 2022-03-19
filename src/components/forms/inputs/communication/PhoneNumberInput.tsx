import { memo, ReactElement } from 'react';
import { Condition } from '@srclaunch/types';

import { AutoComplete } from '../../../../types';
import { TextInput, TextInputProps } from '../text/TextInput';

type PhoneNumberInputProps = TextInputProps & {
  autoComplete?: AutoComplete.PhoneNumber;
};

export const PhoneNumberInput = memo(
  ({ ...props }: PhoneNumberInputProps): ReactElement => {
    return (
      <TextInput
        validation={{ conditions: { [Condition.IsPhoneNumber]: true } }}
        {...props}
      />
    );
  },
);
