import { ElementType, ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
declare type PageProps = ContainerProps & {
    readonly layout?: ElementType;
    readonly loading?: boolean;
    readonly loginRequired?: boolean;
    readonly title?: string | null;
};
export declare const Page: import("react").MemoExoticComponent<({ alignment, background, children, className, layout: Layout, loading, title, ...props }: PageProps) => ReactElement>;
export {};
//# sourceMappingURL=Page.d.ts.map