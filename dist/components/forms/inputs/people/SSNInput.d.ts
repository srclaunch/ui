import { Condition, SSN } from '@srclaunch/types';
import { ReactElement } from 'react';
import { AppearanceProps, InputProps, TextProps } from '../../../../types';
import { Icon } from '../../../media/Icon';
export declare type SSNInputProps = {
    readonly icon?: typeof Icon;
} & InputProps<HTMLInputElement, SSN> & AppearanceProps & TextProps;
export declare const SSNInput: import("react").MemoExoticComponent<({ as, backgroundColor, boxShadow, border, className, cursor, defaultValue, error, hidden, icon, inProgress, label, name, onChange, onKeyPress, placeholder, size, textColor, textWeight, validation, ...props }: SSNInputProps) => ReactElement>;
//# sourceMappingURL=SSNInput.d.ts.map