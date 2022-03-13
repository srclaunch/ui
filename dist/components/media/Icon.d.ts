import { Icon as IconType } from '@srclaunch/icons';
import { ReactElement } from 'react';
import { ForegroundColor, TextColor } from '../../types';
import { ContainerProps } from '../layout/Container';
export declare type IconProps = ContainerProps<HTMLSpanElement> & {
    readonly color?: ForegroundColor | TextColor;
    readonly component?: ReactElement;
    readonly name?: IconType;
    readonly path?: string;
    readonly svg?: ReactElement;
    readonly url?: string;
};
export declare const Icon: import("react").MemoExoticComponent<({ as, color, className, component, name, path, size, svg, url, ...props }: IconProps) => ReactElement>;
//# sourceMappingURL=Icon.d.ts.map