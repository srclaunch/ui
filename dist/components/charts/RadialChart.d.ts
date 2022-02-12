import { ReactElement } from 'react';
import { ContainerProps } from '../../types';
declare type RadialChartProps = {
    data: {
        title?: string | number;
        color: string;
        value: number;
        key?: string | number;
        [key: string]: any;
    };
} & ContainerProps<HTMLDivElement>;
export declare const RadialChart: import("react").MemoExoticComponent<({ data, ...props }: RadialChartProps) => ReactElement>;
export {};
//# sourceMappingURL=RadialChart.d.ts.map