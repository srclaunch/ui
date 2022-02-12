import { PropsWithChildren, ReactElement } from 'react';
import { AppearanceProps, CommonComponentProps, FocusProps, HeightProps, LayoutProps, SizeProps, VisibilityProps, WidthProps } from '../../types';
export declare type ContainerProps<E = HTMLElement> = PropsWithChildren<LayoutProps & AppearanceProps & CommonComponentProps<E> & FocusProps & HeightProps & SizeProps & VisibilityProps & WidthProps>;
export declare const Container: import("react").MemoExoticComponent<({ alignItems, as, children, className, fadeIn, grow, orientation, ...props }: ContainerProps) => ReactElement>;
//# sourceMappingURL=Container.d.ts.map