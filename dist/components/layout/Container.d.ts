import { PropsWithChildren, ReactElement } from 'react';
import { AppearanceProps, BehaviorProps, CommonComponentProps, DimensionProps, FocusEventProps, FocusProps, KeyboardEventProps, LayoutProps, MouseEventProps, VisibilityProps } from '../../types';
export declare type ContainerProps<E = HTMLElement, P = Record<string, unknown>> = CommonComponentProps<PropsWithChildren<LayoutProps<AppearanceProps<FocusProps<DimensionProps<VisibilityProps<FocusEventProps<E, MouseEventProps<E, KeyboardEventProps<E, FocusEventProps<BehaviorProps>>>>>>>>>>> & P;
export declare const Container: import("react").MemoExoticComponent<({ alignItems, as, children, className, fadeIn, grow, orientation, ...props }: ContainerProps) => ReactElement>;
//# sourceMappingURL=Container.d.ts.map