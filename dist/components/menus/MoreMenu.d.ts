import { ReactElement } from 'react';
import { Color, DimensionProps, MenuProps, SizeProps } from '../../types';
export declare type MoreMenuProps<P = {}> = MenuProps<HTMLDivElement, any, SizeProps<DimensionProps<{
    readonly dotColor?: Color;
}>>> & P;
export declare const MoreMenu: import("react").MemoExoticComponent<({ alignContent, backgroundColor, className, dotColor, orientation, size, menu, width, ...props }: MoreMenuProps) => ReactElement>;
//# sourceMappingURL=MoreMenu.d.ts.map