import { ReactElement } from 'react';
import { PhoneNumber } from '@srclaunch/types';
import { AutoComplete } from '../../../../types';
import { TextInputProps } from '../text/TextInput';
declare type PhoneNumberInputProps = {
    autoComplete?: AutoComplete.PhoneNumber;
} & TextInputProps<PhoneNumber>;
export declare const PhoneNumberInput: import("react").MemoExoticComponent<({ ...props }: PhoneNumberInputProps) => ReactElement>;
export {};
//# sourceMappingURL=PhoneNumberInput.d.ts.map