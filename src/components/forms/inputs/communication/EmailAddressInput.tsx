import { AuthenticationService } from '@srclaunch/services';
import { Condition, EmailAddress, ValidationProblem } from '@srclaunch/types';
import { memo, ReactElement, useState } from 'react';

import { AutoComplete, InputValueChangeHandler } from '../../../../types';
import { TextInput, TextInputProps } from '../text/TextInput';

export type EmailAddressInputProps = TextInputProps<
  HTMLInputElement,
  EmailAddress,
  {
    autoComplete?: AutoComplete.Username | AutoComplete.EmailAddress;
  }
>;

export const EmailAddressInput = memo(
  ({
    autoComplete,
    defaultValue,
    onChange,
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
        error={error}
        inProgress={inProgress}
        onChange={async ({ problems, validated, value }) => {
          setError(undefined);
          setEmailAddress(value);

          if (onChange) onChange({ problems, validated, value });

          if (Object.keys(validation).includes(Condition.IsUsernameAvailable)) {
            if (validated && !problems?.length && value && value !== '') {
              setInProgress(true);

              const emailAvailable =
                await AuthenticationService.checkUsernameAvailability({
                  username: value,
                });

              setInProgress(false);

              if (!emailAvailable) {
                const problem: ValidationProblem = {
                  condition: Condition.IsUsernameAvailable,
                  message: {
                    short: 'Email already in use',
                    long: 'Email address is already in use',
                  },
                };

                setError([problem]);

                if (onChange)
                  onChange({
                    problems: [problem],
                    validated: true,
                    value,
                  });
              }
            }
          }
        }}
        validation={validationProps}
        {...props}
      />
    );
  },
);
