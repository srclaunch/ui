import { ElementType, ReactElement } from 'react';
import { ContainerProps } from '../../types';
declare type PageProps = ContainerProps<HTMLDivElement, {
    layout?: ElementType;
    loading?: boolean;
    loginRequired?: boolean;
    title?: string | null;
}>;
export declare const Page: import("react").MemoExoticComponent<({ alignContent, children, className, grow, layout: Layout, loading, title, ...props }: PageProps) => ReactElement>;
export {};
//# sourceMappingURL=Page.d.ts.map