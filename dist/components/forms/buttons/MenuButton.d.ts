import { ReactElement } from 'react';
import { ContainerProps } from '../../layout/Container';
import { MenuProps } from '../../menus/Menu';
import { TextProps } from '../../typography/Text';
export declare type MenuButtonProps = ContainerProps & MenuProps & TextProps & {
    readonly label?: string;
};
export declare const MenuButton: import("react").MemoExoticComponent<({ background, border, borderRadius, className, menu, label, padding, size, states, textColor, ...props }: MenuButtonProps) => ReactElement>;
//# sourceMappingURL=MenuButton.d.ts.map