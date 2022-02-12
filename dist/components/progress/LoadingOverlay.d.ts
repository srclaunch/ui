import { ReactElement } from 'react';
import { ContainerProps, Size } from '../../types';
declare type LoadingOverlayProps = {
    readonly spinnerSize?: Size;
    readonly visible?: boolean;
} & ContainerProps<HTMLDivElement>;
export declare const LoadingOverlay: import("react").MemoExoticComponent<({ backgroundColor, borderRadius, className, spinnerSize, visible, ...props }: LoadingOverlayProps) => ReactElement>;
export {};
//# sourceMappingURL=LoadingOverlay.d.ts.map