import { ReactElement } from 'react';
import { ContainerProps } from './Container';
declare type ScrollableProps = ContainerProps & {
    direction?: 'both' | 'horizontal' | 'vertical';
};
export declare const Scrollable: ({ alignment, children, className, size, ...props }: ScrollableProps) => ReactElement;
export {};
//# sourceMappingURL=Scrollable.d.ts.map