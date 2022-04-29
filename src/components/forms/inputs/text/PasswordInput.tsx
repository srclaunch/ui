import { Condition, ValidationProblem } from '@srclaunch/types';
import {
  // getValidationProblemLabel,
  validate,
} from '@srclaunch/validation';
import { memo, ReactElement, useEffect, useState } from 'react';
// import PasswordStrengthBar from 'react-password-strength-bar';

import { Amount, AutoComplete, InputType } from '../../../../types';
import { InputLabel } from '../../labels/InputLabel';
import { InputRow } from '../../layout/InputRow';
import { TextInput, TextInputProps } from './TextInput';

export type PasswordInputProps = TextInputProps & {
  readonly autoComplete?:
    | AutoComplete.CurrentPassword
    | AutoComplete.NewPassword;
  readonly confirmPasswordLabel?: string;
  readonly showConfirmPassword?: boolean;
  readonly showPasswordStrength?: boolean;
};

export const PasswordInput = memo(
  ({
    autoComplete = AutoComplete.CurrentPassword,
    confirmPasswordLabel = 'Confirm password',
    events = {},
    label = 'Password',
    name,
    showConfirmPassword = false,
    showPasswordStrength = false,
    validation = {},
    ...props
  }: PasswordInputProps): ReactElement => {
    const [password, setPassword] = useState<string | undefined>();
    const [confirmPassword, setConfirmPassword] = useState<
      string | undefined
    >();

    return (
      <>
        {/* {showPasswordStrength && (
          <PasswordStrengthBar
            className="password-strength-label"
            password={password}
          />
        )} */}

        <TextInput
          autoComplete={
            showConfirmPassword
              ? AutoComplete.NewPassword
              : AutoComplete.CurrentPassword
          }
          events={{
            input: {
              onValueChange: ({ validation, value }) => {
                setPassword(value);
              },
            },
            ...events,
          }}
          label={label}
          name={name}
          type={InputType.Password}
          validation={{
            ...validation,
            conditions: {
              [Condition.IsRequired]: true,
              [Condition.HasLetterCount]: 2,
              [Condition.HasNumberCount]: 1,
              [Condition.HasSymbolCount]: 1,
              [Condition.HasUppercaseCount]: 1,
              [Condition.HasLowercaseCount]: 1,
              [Condition.IsLengthGreaterThanOrEqual]: 8,
              [Condition.IsLengthLessThanOrEqual]: 99,
              ...validation.conditions,
            },
          }}
          {...props}
        />

        {showConfirmPassword && (
          <InputRow margin={{ top: Amount.More }}>
            <InputLabel>{confirmPasswordLabel}</InputLabel>

            <TextInput
              autoComplete={autoComplete}
              // error={error}
              //   confirmPasswordChanged && password !== confirmPassword
              //     ? 'Passwords do not match'
              //     : undefined
              // }
              events={{
                input: {
                  onValueChange: ({ validation, value }) => {
                    setConfirmPassword(value);
                  },
                },
              }}
              type={InputType.Password}
              name="confirmPassword"
              validation={{
                conditions: { [Condition.IsEqual]: password },
              }}
            />
          </InputRow>
        )}
      </>
    );
  },
);
