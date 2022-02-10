import { ElementType, ReactElement } from 'react';
import { ContainerProps } from '../../types';
declare type PageProps = ContainerProps<HTMLDivElement, {
    readonly layout?: ElementType;
    readonly loading?: boolean;
    readonly loginRequired?: boolean;
    readonly title?: string | null;
}>;
export declare const Page: import("react").MemoExoticComponent<({ alignContent, children, className, grow, layout: Layout, loading, title, ...props }: PageProps) => ReactElement>;
export {};
//# sourceMappingURL=Page.d.ts.map