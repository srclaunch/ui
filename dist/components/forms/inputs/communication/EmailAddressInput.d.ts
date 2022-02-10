import { EmailAddress } from '@srclaunch/types';
import { ReactElement } from 'react';
import { AutoComplete } from '../../../../types';
import { TextInputProps } from '../text/TextInput';
export declare type EmailAddressInputProps = TextInputProps<HTMLInputElement, EmailAddress, {
    readonly autoComplete?: AutoComplete.Username | AutoComplete.EmailAddress;
}>;
export declare const EmailAddressInput: import("react").MemoExoticComponent<({ autoComplete, defaultValue, onChange, validation, ...props }: EmailAddressInputProps) => ReactElement>;
//# sourceMappingURL=EmailAddressInput.d.ts.map