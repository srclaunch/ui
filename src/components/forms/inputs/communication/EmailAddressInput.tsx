// import { AuthenticationService } from '@srclaunch/http-services';
import { Condition, EmailAddress, ValidationProblem } from '@srclaunch/types';
import { memo, ReactElement, useState } from 'react';

import { AutoComplete, InputValueChangeHandler } from '../../../../types';
import { TextInput, TextInputProps } from '../text/TextInput';

export type EmailAddressInputProps = TextInputProps & {
  readonly autoComplete?: AutoComplete.Username | AutoComplete.EmailAddress;
};

export const EmailAddressInput = memo(
  ({
    autoComplete,
    defaultValue,
    events = {},
    validation = {},
    ...props
  }: EmailAddressInputProps): ReactElement => {
    const [inProgress, setInProgress] = useState(false);
    const [emailAddress, setEmailAddress] = useState(defaultValue);
    const [error, setError] = useState<ValidationProblem[]>();

    const validationProps = {
      ...validation,
      [Condition.IsEmailAddress]: Boolean(emailAddress),
    };

    return (
      <TextInput
        autoComplete={autoComplete ?? AutoComplete.EmailAddress}
        events={{
          input: {
            onValueChange: async ({ validation, value }) => {
              if (validation?.problems) {
                setError(validation.problems);
              }

              setEmailAddress(value);

              if (events.input?.onValueChange)
                events.input?.onValueChange({ validation, value });

              // TODO: Figure out how to handle this
              if (
                validation?.conditions &&
                Object.keys(validation.conditions).includes(
                  Condition.IsUsernameAvailable,
                ) &&
                validation?.validated &&
                !validation?.problems?.length &&
                value &&
                value !== ''
              ) {
                // setInProgress(true);
                // const emailAvailable =
                //   await AuthenticationService.checkUsernameAvailability({
                //     username: value,
                //   });
                // setInProgress(false);
                // if (!emailAvailable) {
                //   const problem: ValidationProblem = {
                //     condition: Condition.IsUsernameAvailable,
                //     message: {
                //       long: 'Email address is already in use',
                //       short: 'Email already in use',
                //     },
                //   };
                //   setError([problem]);
                //   if (onChange)
                //     onChange({
                //       problems: [problem],
                //       validated: true,
                //       value,
                //     });
                // }
              }
            },
          },
        }}
        states={{
          state: {
            error,
            loading: inProgress,
          },
        }}
        validation={validationProps}
        {...props}
      />
    );
  },
);
