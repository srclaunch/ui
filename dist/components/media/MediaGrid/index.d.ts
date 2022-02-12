import { ReactElement } from 'react';
import { ContainerProps } from '../../layout/Container';
import { MediaGridItem } from './MediaGriditem';
export declare type MediaGridProps = {
    readonly className?: string;
    readonly columns?: number;
    readonly items: readonly MediaGridItem[];
    readonly loading?: boolean;
} & ContainerProps<HTMLDivElement>;
export declare const MediaGrid: import("react").MemoExoticComponent<({ borderRadius, children, columns, className, items, loading, ...props }: MediaGridProps) => ReactElement>;
//# sourceMappingURL=index.d.ts.map