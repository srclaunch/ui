import { Icon as IconType } from '@srclaunch/icons';
import { ReactElement } from 'react';
import { Color, ContainerProps, SizeProps } from '../../types';
export declare type IconProps<P = Record<string, unknown>> = SizeProps<{
    readonly color?: Color;
    readonly component?: ReactElement;
    readonly name?: IconType;
    readonly path?: string;
    readonly svg?: ReactElement;
    readonly url?: string;
}> & P;
export declare const Icon: import("react").MemoExoticComponent<({ color, className, component, name, path, size, svg, url, ...props }: ContainerProps<HTMLSpanElement, IconProps>) => ReactElement>;
//# sourceMappingURL=Icon.d.ts.map