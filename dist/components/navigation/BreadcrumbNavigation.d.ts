import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
import { TextProps } from '../typography/Text';
export declare type BreadcrumbNavigationProps = ContainerProps & TextProps & {
    items: {
        label?: string;
        path?: string;
    }[];
};
export declare const BreadcrumbNavigation: import("react").MemoExoticComponent<({ alignment, className, items, shadow, textSize, ...props }: BreadcrumbNavigationProps) => ReactElement>;
//# sourceMappingURL=BreadcrumbNavigation.d.ts.map