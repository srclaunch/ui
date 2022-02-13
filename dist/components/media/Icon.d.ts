import { Icon as IconType } from '@srclaunch/icons';
import { ReactElement } from 'react';
import { Color, HeightProps, SizeProps, WidthProps } from '../../types';
import { ContainerProps } from '../layout/Container';
export declare type IconProps = {
    readonly color?: Color;
    readonly component?: ReactElement;
    readonly name?: IconType;
    readonly path?: string;
    readonly svg?: ReactElement;
    readonly url?: string;
} & ContainerProps<HTMLSpanElement> & HeightProps & SizeProps & WidthProps;
export declare const Icon: import("react").MemoExoticComponent<({ color, className, component, name, path, size, svg, url, ...props }: IconProps) => ReactElement>;
//# sourceMappingURL=Icon.d.ts.map