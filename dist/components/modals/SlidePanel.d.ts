import { ReactElement } from 'react';
import { CommonComponentProps } from '../../types';
import { ContainerProps } from '../layout/Container';
declare type SlidePanelProps = {
    readonly visible?: boolean;
} & CommonComponentProps<HTMLDivElement> & ContainerProps;
export declare const SlidePanel: import("react").MemoExoticComponent<({ as, background, borderRadius, children, className, depth, padding, position, shadow, size, visible, ...props }: SlidePanelProps) => ReactElement>;
export {};
//# sourceMappingURL=SlidePanel.d.ts.map