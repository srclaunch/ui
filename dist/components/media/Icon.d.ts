import { Icon as IconType } from '@srclaunch/icons';
import { ReactElement } from 'react';
import { ForegroundColor, States, TextColor } from '../../types';
import { ContainerProps } from '../layout/Container';
export declare type IconProps = ContainerProps & {
    readonly color?: ForegroundColor | TextColor;
    readonly component?: ReactElement;
    readonly name?: IconType;
    readonly path?: string;
    readonly svg?: ReactElement;
    readonly url?: string;
} & {
    readonly states?: States<IconProps>;
};
export declare const Icon: import("react").MemoExoticComponent<({ as, alignment, color, className, component, name, path, size, svg, url, ...props }: IconProps) => ReactElement>;
//# sourceMappingURL=Icon.d.ts.map