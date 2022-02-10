import PasswordStrengthBar from 'react-password-strength-bar';
import { Condition, Password } from '@srclaunch/types';
import {
  // getValidationProblemLabel,
  validate,
} from '@srclaunch/validation';
import { memo, ReactElement, useEffect, useState } from 'react';
import {
  Amount,
  AutoComplete,
  InputValueChangeHandler,
} from '../../../../types';
import { InputRow } from '../../layout/InputRow';
import { InputLabel } from '../../labels/InputLabel';
import { TextInput, TextInputProps, TextInputType } from './TextInput';

export type PasswordInputProps = TextInputProps<
  HTMLInputElement,
  Password,
  {
    autoComplete?: AutoComplete.CurrentPassword | AutoComplete.NewPassword;
    confirmPasswordLabel?: string;
    showConfirmPassword?: boolean;
    showPasswordStrength?: boolean;
  }
>;

export const PasswordInput = memo(
  ({
    autoComplete = AutoComplete.CurrentPassword,
    confirmPasswordLabel = 'Confirm password',
    label = 'Password',
    name,
    onChange,
    showConfirmPassword = false,
    showPasswordStrength = false,
    validation = {
      [Condition.IsRequired]: true,
      [Condition.HasLetterCount]: 2,
      [Condition.HasNumberCount]: 1,
      [Condition.HasSymbolCount]: 1,
      [Condition.HasUppercaseCount]: 1,
      [Condition.HasLowercaseCount]: 1,
      [Condition.IsLengthGreaterThanOrEqual]: 8,
      [Condition.IsLengthLessThanOrEqual]: 99,
    },
    ...props
  }: PasswordInputProps): ReactElement => {
    const [password, setPassword] = useState<string | undefined>();
    const [confirmPassword, setConfirmPassword] = useState<
      string | undefined
    >();

    useEffect(() => {
      if (showConfirmPassword) {
        const problems = validate(password, validation);

        if (password !== confirmPassword) {
          problems.push({
            condition: Condition.IsEqual,
            message: {
              long: 'Passwords do not match.',
              short: 'Passwords do not match',
            },
          });
        }

        if (onChange)
          onChange({
            problems,
            validated: !problems.length,
            value: password,
          });
      } else {
        const problems = validate(password, validation);

        if (onChange)
          onChange({
            problems,
            validated: !problems.length,
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
          onChange={({ problems, validated, value }) => {
            setPassword(value);
          }}
          inputType={TextInputType.Password}
          validation={validation}
          {...props}
        />

        {showConfirmPassword && (
          <InputRow marginTop={Amount.More} marginBottom={Amount.None}>
            <InputLabel>{confirmPasswordLabel}</InputLabel>

            <TextInput
              autoComplete={autoComplete}
              // error={error}
              //   confirmPasswordChanged && password !== confirmPassword
              //     ? 'Passwords do not match'
              //     : undefined
              // }
              inputType={TextInputType.Password}
              name="confirmPassword"
              onChange={({ value }) => {
                setConfirmPassword(value);
                // setConfirmPasswordChanged(true);
              }}
              validation={{
                [Condition.IsEqual]: password,
              }}
            />
          </InputRow>
        )}
      </>
    );
  },
);
