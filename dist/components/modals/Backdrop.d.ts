import { ReactElement } from 'react';
import { ContainerProps, MouseEventProps } from '../../types';
declare type BackdropProps = ContainerProps<{
    onClick?: () => unknown;
    visible: boolean;
} & MouseEventProps<HTMLDivElement>>;
export declare const Backdrop: import("react").MemoExoticComponent<({ as, children, className, onClick, visible, ...props }: BackdropProps) => ReactElement>;
export {};
//# sourceMappingURL=Backdrop.d.ts.map