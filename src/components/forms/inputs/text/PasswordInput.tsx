import { Condition, ValidationProblem } from '@srclaunch/types';
import {
  // getValidationProblemLabel,
  validate,
} from '@srclaunch/validation';
import { memo, ReactElement, useEffect, useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';

import { Amount, AutoComplete } from '../../../../types';
import { InputLabel } from '../../labels/InputLabel';
import { InputRow } from '../../layout/InputRow';
import { TextInput, TextInputProps, TextInputType } from './TextInput';

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
    validation = {
      conditions: {
        [Condition.IsRequired]: true,
        [Condition.HasLetterCount]: 2,
        [Condition.HasNumberCount]: 1,
        [Condition.HasSymbolCount]: 1,
        [Condition.HasUppercaseCount]: 1,
        [Condition.HasLowercaseCount]: 1,
        [Condition.IsLengthGreaterThanOrEqual]: 8,
        [Condition.IsLengthLessThanOrEqual]: 99,
      },
    },
    ...props
  }: PasswordInputProps): ReactElement => {
    const [password, setPassword] = useState<string | undefined>();
    const [confirmPassword, setConfirmPassword] = useState<
      string | undefined
    >();

    useEffect(() => {
      if (showConfirmPassword) {
        let problems: ValidationProblem[] | undefined = [];

        if (validation && validation.conditions) {
          problems = validate(password, validation?.conditions);
        }

        if (password !== confirmPassword) {
          problems.push({
            condition: Condition.IsEqual,
            message: {
              long: 'Passwords do not match.',
              short: 'Passwords do not match',
            },
          });
        }

        if (events.input?.onValueChange)
          events.input.onValueChange({
            validation: {
              problems,
              validated: problems.length === 0,
            },
            value: password,
          });
      } else {
        let problems: ValidationProblem[] | undefined = [];

        if (validation && validation.conditions) {
          problems = validate(password, validation?.conditions);
        }

        if (events.input?.onValueChange)
          events.input.onValueChange({
            validation: {
              problems,
              validated: problems.length === 0,
            },
            value: password,
          });
      }
    }, [password, confirmPassword]);

    return (
      <>
        {showPasswordStrength && (
          <PasswordStrengthBar
            className="password-strength-label"
            password={password}
          />
        )}

        <TextInput
          autoComplete={
            showConfirmPassword
              ? AutoComplete.NewPassword
              : AutoComplete.CurrentPassword
          }
          label={label}
          name={name}
          events={{
            input: {
              onValueChange: ({ validation, value }) => {
                setPassword(value);
              },
            },
          }}
          inputType={TextInputType.Password}
          validation={validation}
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
              inputType={TextInputType.Password}
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
