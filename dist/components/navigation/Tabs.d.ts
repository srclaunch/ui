import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
declare type TabProps = ContainerProps & {
    readonly label: string;
    readonly selected?: boolean;
    readonly visible?: boolean;
};
export declare const Tab: import("react").MemoExoticComponent<({ className, children, label, ...props }: TabProps) => ReactElement>;
declare type TabsProps = ContainerProps;
export declare const Tabs: import("react").MemoExoticComponent<({ background, borderRadius, className, children, ...props }: TabsProps) => ReactElement>;
export {};
//# sourceMappingURL=Tabs.d.ts.map