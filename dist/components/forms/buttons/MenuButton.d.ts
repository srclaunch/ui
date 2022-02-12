import { ReactElement } from 'react';
import { TextProps } from '../../../types';
import { ContainerProps } from '../../layout/Container';
import { MenuProps } from '../../menus/Menu';
export declare type MenuButtonProps = {
    readonly label?: string;
} & ContainerProps<HTMLDivElement> & MenuProps & TextProps;
export declare const MenuButton: import("react").MemoExoticComponent<({ backgroundColor, border, borderRadius, className, menu, label, padding, size, textColor, width, ...props }: MenuButtonProps) => ReactElement>;
//# sourceMappingURL=MenuButton.d.ts.map