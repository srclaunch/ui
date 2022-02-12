import { EmailAddress } from '@srclaunch/types';
import { ReactElement } from 'react';
import { AutoComplete } from '../../../../types';
import { TextInputProps } from '../text/TextInput';
export declare type EmailAddressInputProps = {
    readonly autoComplete?: AutoComplete.Username | AutoComplete.EmailAddress;
} & TextInputProps<EmailAddress>;
export declare const EmailAddressInput: import("react").MemoExoticComponent<({ autoComplete, defaultValue, onChange, validation, ...props }: EmailAddressInputProps) => ReactElement>;
//# sourceMappingURL=EmailAddressInput.d.ts.map