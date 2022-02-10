/// <reference types="react" />
import { TextProps } from '../../../types';
import { MenuProps } from '../../menus/Menu';
declare type MenuButtonProps<E = HTMLDivElement, P = {}> = MenuProps<E, any, TextProps<HTMLSpanElement, {
    label?: string;
}>> & P;
export declare const MenuButton: import("react").MemoExoticComponent<({ backgroundColor, border, borderRadius, className, menu, label, padding, size, textColor, width, ...props }: MenuButtonProps) => React.ReactElement>;
export {};
//# sourceMappingURL=MenuButton.d.ts.map