import { ReactElement } from 'react';
import { ContainerProps } from '../../layout/Container';
import { MediaGridItem } from './MediaGriditem';
export declare type MediaGridProps = ContainerProps & {
    readonly className?: string;
    readonly columns?: number;
    readonly items: readonly MediaGridItem[];
};
export declare const MediaGrid: import("react").MemoExoticComponent<({ borderRadius, children, columns, className, items, states, ...props }: MediaGridProps) => ReactElement>;
//# sourceMappingURL=index.d.ts.map