// import { AuthenticationService } from '@srclaunch/http-services';
import { Condition, ValidationProblem } from '@srclaunch/types';
import { memo, ReactElement, useState } from 'react';

import { AutoComplete } from '../../../../types';
import { TextInput, TextInputProps } from '../text/TextInput';

export type EmailAddressInputProps = TextInputProps & {
  readonly autoComplete?: AutoComplete.Username | AutoComplete.EmailAddress;
};

export const EmailAddressInput = memo(
  ({
    autoComplete = AutoComplete.EmailAddress,
    className = '',
    defaultValue,
    spellCheck = false,
    validation = {},
    ...props
  }: EmailAddressInputProps): ReactElement => {
    return (
      <TextInput
        autoComplete={autoComplete}
        className={`email-address-input ${className}`}
        spellCheck={spellCheck}
        validation={{
          conditions: {
            [Condition.IsEmailAddress]: true,
            ...validation.conditions,
          },
          ...validation,
        }}
        {...props}
      />
    );
  },
);
