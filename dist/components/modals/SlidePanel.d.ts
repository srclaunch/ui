import { ReactElement } from 'react';
import { ContainerProps, HeightProps, WidthProps } from '../../types';
declare type SlidePanelProps = {
    readonly visible?: boolean;
} & ContainerProps<HTMLDivElement> & HeightProps & WidthProps;
export declare const SlidePanel: import("react").MemoExoticComponent<({ alignItems, backgroundColor, boxShadow, borderRadius, children, className, depth, padding, visible, width, ...props }: SlidePanelProps) => ReactElement>;
export {};
//# sourceMappingURL=SlidePanel.d.ts.map