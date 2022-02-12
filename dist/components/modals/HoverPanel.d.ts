import { ReactElement } from 'react';
import { ContainerProps, FocusProps } from '../../types';
declare type HoverPanelProps = {
    readonly detached?: boolean;
    readonly visible?: boolean;
    readonly setMenuVisible?: (visible: boolean) => unknown;
} & ContainerProps<HTMLDivElement> & FocusProps;
export declare const HoverPanel: import("react").MemoExoticComponent<({ alignItems, alignContent, backgroundColor, border, borderRadius, children, className, depth, detached, focused, grow, orientation, visible, setMenuVisible, ...props }: HoverPanelProps) => ReactElement>;
export {};
//# sourceMappingURL=HoverPanel.d.ts.map