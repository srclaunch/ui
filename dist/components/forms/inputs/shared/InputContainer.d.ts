import { ReactElement } from 'react';
import { ContainerProps } from '../../../layout/Container';
import { InputProps } from './Input';
import { IconProps } from '../../../media/Icon';
export declare type InputContainerProps<V> = ContainerProps & InputProps<V> & {
    readonly icon?: IconProps;
    readonly prefix?: string;
    readonly spellCheck?: boolean;
    readonly suffix?: string;
};
export declare const InputContainer: import("react").MemoExoticComponent<({ alignment, background, borderRadius, border, children, className, defaultValue, events, icon, label, lineHeight, max, maxLength, min, name, shadow, states, textAlign, textColor, textSize, type, validation, ...props }: InputContainerProps<any>) => ReactElement>;
//# sourceMappingURL=InputContainer.d.ts.map