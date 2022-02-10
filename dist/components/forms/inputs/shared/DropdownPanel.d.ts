import { ReactElement } from 'react';
import { ContainerProps, FocusProps } from '../../../../types';
declare type DropdownPanelProps<T = {}> = ContainerProps<FocusProps<{
    readonly visible?: boolean;
    readonly setMenuVisible?: (visible: boolean) => unknown;
} & T>>;
export declare const DropdownPanel: import("react").MemoExoticComponent<({ alignItems, backgroundColor, border, borderRadius, children, className, depth, focused, orientation, visible, ...props }: DropdownPanelProps) => ReactElement>;
export {};
//# sourceMappingURL=DropdownPanel.d.ts.map