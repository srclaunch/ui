import { ReactElement } from 'react';
import { InputProps } from '../../../../types';
import { ContainerProps } from '../../../layout/Container';
import { MenuProps } from '../../../menus/Menu';
export declare type DropdownInputProps<V = any> = ContainerProps & InputProps<HTMLSelectElement, V> & MenuProps;
export declare const DropdownInput: import("react").MemoExoticComponent<({ background, border, borderRadius, className, defaultValue, label, menu, name, onChange, padding, placeholder, size, validation, ...props }: DropdownInputProps) => ReactElement>;
//# sourceMappingURL=DropdownInput.d.ts.map