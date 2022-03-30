import { PageRoute } from '@srclaunch/types';
import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
export declare type RouterViewProps = {
    routes: PageRoute[];
} & Omit<ContainerProps, 'children'>;
export declare const RouterView: import("react").MemoExoticComponent<({ alignment, className, routes, ...props }: RouterViewProps) => ReactElement>;
//# sourceMappingURL=RouterView.d.ts.map