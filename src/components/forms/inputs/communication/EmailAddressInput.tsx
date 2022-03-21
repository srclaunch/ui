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
    autoComplete,
    className = '',
    defaultValue,
    spellCheck = false,
    validation = {},
    ...props
  }: EmailAddressInputProps): ReactElement => {
    return (
      <TextInput
        autoComplete={autoComplete ?? AutoComplete.EmailAddress}
        // events={{
        //   input: {
        //     onValueChange: async ({ validation, value }) => {
        //       if (validation?.problems) {
        //         setError(validation.problems);
        //       }

        //       if (events.input?.onValueChange)
        //         events.input?.onValueChange({ validation, value });

        //       if (
        //         validation?.conditions &&
        //         Object.keys(validation.conditions).includes(
        //           Condition.IsUsernameAvailable,
        //         ) &&
        //         validation?.validated &&
        //         !validation?.problems?.length &&
        //         value &&
        //         value !== ''
        //       ) {
        //         // setInProgress(true);
        //         // const emailAvailable =
        //         //   await AuthenticationService.checkUsernameAvailability({
        //         //     username: value,
        //         //   });
        //         // setInProgress(false);
        //         // if (!emailAvailable) {
        //         //   const problem: ValidationProblem = {
        //         //     condition: Condition.IsUsernameAvailable,
        //         //     message: {
        //         //       long: 'Email address is already in use',
        //         //       short: 'Email already in use',
        //         //     },
        //         //   };
        //         //   setError([problem]);
        //         //   if (onChange)
        //         //     onChange({
        //         //       problems: [problem],
        //         //       validated: true,
        //         //       value,
        //         //     });
        //         // }
        //       }
        //     },
        //   },
        //   ...events,
        // }}
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
