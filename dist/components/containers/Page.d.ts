import { ElementType, ReactElement } from 'react';
import { ContainerProps } from '../../types';
declare type PageProps = {
    readonly layout?: ElementType;
    readonly loading?: boolean;
    readonly loginRequired?: boolean;
    readonly title?: string | null;
} & ContainerProps<HTMLDivElement>;
export declare const Page: import("react").MemoExoticComponent<({ alignContent, backgroundColor, children, className, grow, layout: Layout, loading, title, ...props }: PageProps) => ReactElement>;
export {};
//# sourceMappingURL=Page.d.ts.map