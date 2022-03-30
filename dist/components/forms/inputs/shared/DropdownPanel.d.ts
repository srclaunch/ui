import { ReactElement } from 'react';
import { ContainerProps } from '../../../layout/Container';
declare type DropdownPanelProps = {
    readonly visible?: boolean;
    readonly setMenuVisible?: (visible: boolean) => unknown;
} & ContainerProps;
export declare const DropdownPanel: import("react").MemoExoticComponent<({ background, border, borderRadius, children, className, position, size, states, ...props }: DropdownPanelProps) => ReactElement>;
export {};
//# sourceMappingURL=DropdownPanel.d.ts.map