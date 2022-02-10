import { ReactElement } from 'react';
import { ContainerProps, Size } from '../../types';
declare type LoadingOverlayProps = ContainerProps<HTMLDivElement, {
    readonly spinnerSize?: Size;
    readonly visible?: boolean;
}>;
export declare const LoadingOverlay: import("react").MemoExoticComponent<({ backgroundColor, borderRadius, className, spinnerSize, visible, ...props }: LoadingOverlayProps) => ReactElement>;
export {};
//# sourceMappingURL=LoadingOverlay.d.ts.map