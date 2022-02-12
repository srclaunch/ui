import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Condition } from '@srclaunch/types';
import { 
// getValidationProblemLabel,
validate, } from '@srclaunch/validation';
import { memo, useEffect, useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { Amount, AutoComplete } from '../../../../types';
import { InputLabel } from '../../labels/InputLabel';
import { InputRow } from '../../layout/InputRow';
import { TextInput, TextInputType } from './TextInput';
export const PasswordInput = memo(({ autoComplete = AutoComplete.CurrentPassword, confirmPasswordLabel = 'Confirm password', label = 'Password', name, onChange, showConfirmPassword = false, showPasswordStrength = false, validation = {
    [Condition.IsRequired]: true,
    [Condition.HasLetterCount]: 2,
    [Condition.HasNumberCount]: 1,
    [Condition.HasSymbolCount]: 1,
    [Condition.HasUppercaseCount]: 1,
    [Condition.HasLowercaseCount]: 1,
    [Condition.IsLengthGreaterThanOrEqual]: 8,
    [Condition.IsLengthLessThanOrEqual]: 99,
}, ...props }) => {
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
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
                    validated: problems.length === 0,
                    value: password,
                });
        }
        else {
            const problems = validate(password, validation);
            if (onChange)
                onChange({
                    problems,
                    validated: problems.length === 0,
                    value: password,
                });
        }
    }, [password, confirmPassword]);
    return (_jsxs(_Fragment, { children: [showPasswordStrength && (_jsx(PasswordStrengthBar, { className: "password-strength-label", password: password }, void 0)), _jsx(TextInput, { autoComplete: showConfirmPassword
                    ? AutoComplete.NewPassword
                    : AutoComplete.CurrentPassword, label: label, name: name, onChange: ({ problems, validated, value }) => {
                    setPassword(value);
                }, inputType: TextInputType.Password, validation: validation, ...props }, void 0), showConfirmPassword && (_jsxs(InputRow, { marginTop: Amount.More, marginBottom: Amount.None, children: [_jsx(InputLabel, { children: confirmPasswordLabel }, void 0), _jsx(TextInput, { autoComplete: autoComplete, 
                        // error={error}
                        //   confirmPasswordChanged && password !== confirmPassword
                        //     ? 'Passwords do not match'
                        //     : undefined
                        // }
                        inputType: TextInputType.Password, name: "confirmPassword", onChange: ({ value }) => {
                            setConfirmPassword(value);
                            // setConfirmPasswordChanged(true);
                        }, validation: {
                            [Condition.IsEqual]: password,
                        } }, void 0)] }, void 0))] }, void 0));
});
//# sourceMappingURL=PasswordInput.js.map