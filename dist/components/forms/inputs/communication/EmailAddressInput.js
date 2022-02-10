import { jsx as _jsx } from "react/jsx-runtime";
// import { AuthenticationService } from '@srclaunch/http-services';
import { Condition } from '@srclaunch/types';
import { memo, useState } from 'react';
import { AutoComplete } from '../../../../types';
import { TextInput } from '../text/TextInput';
export const EmailAddressInput = memo(({ autoComplete, defaultValue, onChange, validation = {}, ...props }) => {
    const [inProgress, setInProgress] = useState(false);
    const [emailAddress, setEmailAddress] = useState(defaultValue);
    const [error, setError] = useState();
    const validationProps = {
        ...validation,
        [Condition.IsEmailAddress]: Boolean(emailAddress),
    };
    return (_jsx(TextInput, { autoComplete: autoComplete ?? AutoComplete.EmailAddress, error: error, inProgress: inProgress, onChange: async ({ problems, validated, value }) => {
            setError(problems);
            setEmailAddress(value);
            if (onChange)
                onChange({ problems, validated, value });
            // TODO: Figure out how to handle this
            if (Object.keys(validation).includes(Condition.IsUsernameAvailable) &&
                validated &&
                !problems?.length &&
                value &&
                value !== '') {
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
        }, validation: validationProps, ...props }, void 0));
});
//# sourceMappingURL=EmailAddressInput.js.map