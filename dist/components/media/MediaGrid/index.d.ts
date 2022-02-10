import { ReactElement } from 'react';
import { ContainerProps } from '../../layout/Container';
import { MediaGridItem } from './MediaGriditem';
export declare type MediaGridProps = ContainerProps<HTMLDivElement, {
    className?: string;
    columns?: number;
    items: MediaGridItem[];
    loading?: boolean;
}>;
export declare const MediaGrid: import("react").MemoExoticComponent<({ borderRadius, children, columns, className, items, loading, ...props }: MediaGridProps) => ReactElement>;
//# sourceMappingURL=index.d.ts.map