import { ReactElement } from 'react';
import { MenuButtonProps } from '../forms/buttons/MenuButton';
declare type UserMenuProps = MenuButtonProps & {
    readonly onLogoutSuccess?: () => unknown;
};
export declare const UserMenu: import("react").MemoExoticComponent<({ onLogoutSuccess, states }: UserMenuProps) => ReactElement>;
export {};
//# sourceMappingURL=UserMenu.d.ts.map