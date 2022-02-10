import { ReactElement } from 'react';
import { FocusProps } from '../../types';
import { Icon } from '../media/Icon';
import { TextProps } from './Text';
declare type LinkProps<T = {}> = TextProps<HTMLAnchorElement, FocusProps<{
    readonly icon?: typeof Icon;
    readonly onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    readonly prefetch?: boolean;
    readonly rel?: string;
    readonly target?: '_blank';
    readonly to: string;
} & T>>;
export declare const Link: import("react").MemoExoticComponent<({ children, hover, size, textColor, textWeight, to, underline, underlineColor, ...props }: LinkProps) => ReactElement>;
export {};
//# sourceMappingURL=Link.d.ts.map