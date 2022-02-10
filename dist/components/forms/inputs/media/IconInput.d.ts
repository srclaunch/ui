import { ReactElement } from 'react';
import { Icon as IconType } from '@srclaunch/icons';
export declare const defaultIcons: string[];
declare type IconInputProps = {
    color?: string;
    defaultValue?: IconType;
    modal: boolean;
    onChange: (selectedIcon: string) => unknown;
};
export declare const IconInput: import("react").MemoExoticComponent<({ color, defaultValue, modal, onChange, }: IconInputProps) => ReactElement>;
export {};
//# sourceMappingURL=IconInput.d.ts.map