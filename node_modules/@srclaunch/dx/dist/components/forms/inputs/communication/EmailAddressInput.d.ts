import { ReactElement } from 'react';
import { AutoComplete } from '../../../../types';
import { TextInputProps } from '../text/TextInput';
export declare type EmailAddressInputProps = TextInputProps & {
    readonly autoComplete?: AutoComplete.Username | AutoComplete.EmailAddress;
};
export declare const EmailAddressInput: import("react").MemoExoticComponent<({ autoComplete, className, defaultValue, spellCheck, validation, ...props }: EmailAddressInputProps) => ReactElement>;
//# sourceMappingURL=EmailAddressInput.d.ts.map