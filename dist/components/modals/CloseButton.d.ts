import { ReactElement } from 'react';
import { ContainerProps, ForegroundColor } from '../../types';
declare type CloseButtonProps<T = {}> = ContainerProps<HTMLButtonElement, {
    readonly iconColor?: ForegroundColor;
} & T>;
export declare const CloseButton: import("react").MemoExoticComponent<({ alignItems, backgroundColor, iconColor, className, onClick, size, ...props }: CloseButtonProps) => ReactElement>;
export {};
//# sourceMappingURL=CloseButton.d.ts.map