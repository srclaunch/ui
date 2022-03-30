import { ReactElement } from 'react';
import { LinkProps } from '../../types';
import { LabelProps } from '../typography/Label';
export declare type PageLinkProps = {
    readonly label?: string;
    readonly showArrow?: boolean;
    readonly showUnderline?: boolean;
} & LabelProps & LinkProps;
export declare const PageLink: import("react").MemoExoticComponent<({ textColor, label, to, icon, showArrow, showUnderline, }: PageLinkProps) => ReactElement>;
//# sourceMappingURL=PageLink.d.ts.map