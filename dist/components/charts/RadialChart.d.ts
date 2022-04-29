import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
declare type RadialChartProps = ContainerProps & {
    data: {
        title?: string | number;
        color: string;
        value: number;
        key?: string | number;
        [key: string]: any;
    };
};
export declare const RadialChart: import("react").MemoExoticComponent<({ data, ...props }: RadialChartProps) => ReactElement>;
export {};
//# sourceMappingURL=RadialChart.d.ts.map