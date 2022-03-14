import { ReactElement } from 'react';
import { ContainerProps } from '../../../layout/Container';
declare type DropdownPanelProps = {
    readonly visible?: boolean;
    readonly setMenuVisible?: (visible: boolean) => unknown;
} & ContainerProps;
export declare const DropdownPanel: import("react").MemoExoticComponent<({ background, border, borderRadius, children, className, depth, focused, position, size, visible, ...props }: DropdownPanelProps) => ReactElement>;
export {};
//# sourceMappingURL=DropdownPanel.d.ts.map