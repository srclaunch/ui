import { MouseEvent, ReactElement } from 'react';
import { Icon } from '../media/Icon';
import { TextProps } from './Text';
export declare type LinkProps = TextProps & {
    readonly icon?: typeof Icon;
    readonly onClick?: (e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    readonly prefetch?: boolean;
    readonly rel?: string;
    readonly target?: '_blank';
    readonly to: string;
};
export declare const Link: import("react").MemoExoticComponent<({ children, textColor, textDecoration, textSize, textWeight, to, ...props }: LinkProps) => ReactElement>;
//# sourceMappingURL=Link.d.ts.map