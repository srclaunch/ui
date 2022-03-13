import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
declare type HoverPanelProps = ContainerProps<HTMLDivElement> & {
    readonly detached?: boolean;
    readonly visible?: boolean;
    readonly setMenuVisible?: (visible: boolean) => unknown;
};
export declare const HoverPanel: import("react").MemoExoticComponent<({ background, border, borderRadius, children, className, depth, detached, focused, visible, setMenuVisible, ...props }: HoverPanelProps) => ReactElement>;
export {};
//# sourceMappingURL=HoverPanel.d.ts.map