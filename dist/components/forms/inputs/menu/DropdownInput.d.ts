import { ReactElement } from 'react';
import { InputProps } from '../../../../types';
import { ContainerProps } from '../../../layout/Container';
import { MenuProps } from '../../../menus/Menu';
import { TextProps } from '../../../typography/Text';
export declare type DropdownInputProps<E = HTMLElement, T = any, P = {}> = ContainerProps<E, InputProps<E, T, MenuProps<E, T, TextProps<E>>>> & P;
export declare const DropdownInput: import("react").MemoExoticComponent<({ backgroundColor, border, borderRadius, className, defaultValue, label, menu, maxWidth, minWidth, name, onChange, padding, placeholder, size, textColor, validation, ...props }: DropdownInputProps<any>) => ReactElement>;
//# sourceMappingURL=DropdownInput.d.ts.map