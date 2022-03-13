import { ReactElement } from 'react';
import { Size } from '../../types';
import { ContainerProps } from '../layout/Container';
declare type LoadingOverlayProps = {
    readonly spinnerSize?: Size;
    readonly visible?: boolean;
} & ContainerProps<HTMLDivElement>;
export declare const LoadingOverlay: import("react").MemoExoticComponent<({ background, borderRadius, className, position, spinnerSize, visible, ...props }: LoadingOverlayProps) => ReactElement>;
export {};
//# sourceMappingURL=LoadingOverlay.d.ts.map