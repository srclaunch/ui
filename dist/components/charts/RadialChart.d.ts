import { ReactElement } from 'react';
import { ContainerProps, DimensionProps } from '../../types';
declare type RadialChartProps = ContainerProps<HTMLDivElement, DimensionProps<{
    data: {
        title?: string | number;
        color: string;
        value: number;
        key?: string | number;
        [key: string]: any;
    };
}>>;
export declare const RadialChart: import("react").MemoExoticComponent<({ data, ...props }: RadialChartProps) => ReactElement>;
export {};
//# sourceMappingURL=RadialChart.d.ts.map