import { Condition, SSN } from '@srclaunch/types';
import { ReactElement } from 'react';
import { InputProps } from '../../../../types';
import { Icon } from '../../../media/Icon';
import { InputContainerProps } from '../shared/InputContainer';
import { TextProps } from '../../../typography/Text';
export declare type SSNInputProps = InputProps<SSN> & InputContainerProps & TextProps & {
    readonly icon?: typeof Icon;
};
export declare const SSNInput: import("react").MemoExoticComponent<({ as, background, border, className, cursor, defaultValue, events, icon, label, name, placeholder, shadow, states, textSize, textColor, textWeight, validation, ...props }: SSNInputProps) => ReactElement>;
//# sourceMappingURL=SSNInput.d.ts.map