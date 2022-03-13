import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
declare type BackdropProps = {
    onClick?: () => unknown;
    visible: boolean;
} & ContainerProps;
export declare const Backdrop: import("react").MemoExoticComponent<({ as, background, children, className, onClick, position, visible, ...props }: BackdropProps) => ReactElement>;
export {};
//# sourceMappingURL=Backdrop.d.ts.map