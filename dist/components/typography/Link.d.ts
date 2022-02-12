import { MouseEvent, ReactElement } from 'react';
import { FocusProps } from '../../types';
import { Icon } from '../media/Icon';
import { LabelProps } from './Label';
export declare type LinkProps = {
    readonly icon?: typeof Icon;
    readonly onClick?: (e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    readonly prefetch?: boolean;
    readonly rel?: string;
    readonly target?: '_blank';
    readonly to: string;
} & LabelProps & FocusProps;
export declare const Link: import("react").MemoExoticComponent<({ children, hover, size, textColor, textWeight, to, underline, underlineColor, ...props }: LinkProps) => ReactElement>;
//# sourceMappingURL=Link.d.ts.map