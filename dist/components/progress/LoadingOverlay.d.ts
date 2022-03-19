import { ReactElement } from 'react';
import { Size } from '../../types';
import { ContainerProps } from '../layout/Container';
declare type LoadingOverlayProps = ContainerProps & {
    readonly spinnerSize?: Size;
    readonly visible?: boolean;
};
export declare const LoadingOverlay: import("react").MemoExoticComponent<({ background, borderRadius, className, position, spinnerSize, visible, ...props }: LoadingOverlayProps) => ReactElement>;
export {};
//# sourceMappingURL=LoadingOverlay.d.ts.map