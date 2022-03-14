import { ReactElement } from 'react';
import { ContainerProps } from '../../layout/Container';
import { MenuProps } from '../../menus/Menu';
import { TextProps } from '../../typography/Text';
export declare type MenuButtonProps = {
    readonly label?: string;
} & ContainerProps<HTMLDivElement> & MenuProps & TextProps;
export declare const MenuButton: import("react").MemoExoticComponent<({ background, border, borderRadius, className, menu, label, padding, size, textColor, ...props }: MenuButtonProps) => ReactElement>;
//# sourceMappingURL=MenuButton.d.ts.map