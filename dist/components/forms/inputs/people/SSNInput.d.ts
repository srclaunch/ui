import { Condition, SSN } from '@srclaunch/types';
import { ReactElement } from 'react';
import { InputProps } from '../../../../types';
import { Icon } from '../../../media/Icon';
import { InputContainerProps } from '../shared/InputContainer';
import { TextProps } from '../../../typography/Text';
export declare type SSNInputProps = {
    readonly icon?: typeof Icon;
} & InputProps<HTMLInputElement, SSN> & InputContainerProps & TextProps;
export declare const SSNInput: import("react").MemoExoticComponent<({ as, background, border, className, cursor, defaultValue, error, hidden, icon, inProgress, label, name, onChange, onKeyPress, placeholder, shadow, textSize, textColor, textWeight, validation, ...props }: SSNInputProps) => ReactElement>;
//# sourceMappingURL=SSNInput.d.ts.map