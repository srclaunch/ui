import { ReactElement } from 'react';
import { LabelProps, LinkProps } from '../../types';
declare type PageLinkProps<T = {}> = LabelProps<HTMLLabelElement, LinkProps<{
    label?: string;
    showArrow?: boolean;
    showUnderline?: boolean;
} & T>>;
export declare const PageLink: import("react").MemoExoticComponent<({ textColor, label, to, icon, showArrow, showUnderline, }: PageLinkProps) => ReactElement>;
export {};
//# sourceMappingURL=PageLink.d.ts.map