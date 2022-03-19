import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
declare type HoverPanelProps = ContainerProps & {
    readonly detached?: boolean;
    readonly visible?: boolean;
    readonly setMenuVisible?: (visible: boolean) => unknown;
};
export declare const HoverPanel: import("react").MemoExoticComponent<({ background, border, borderRadius, children, className, depth, detached, setMenuVisible, states, visible, ...props }: HoverPanelProps) => ReactElement>;
export {};
//# sourceMappingURL=HoverPanel.d.ts.map