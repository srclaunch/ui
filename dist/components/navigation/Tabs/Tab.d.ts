import { ReactElement } from 'react';
import { CommonComponentProps } from '../../../types';
import { ContainerProps } from '../../layout/Container';
declare type TabProps = CommonComponentProps<ContainerProps<HTMLDivElement, {
    label: string;
    selected?: boolean;
    visible?: boolean;
}>>;
export declare const Tab: import("react").MemoExoticComponent<({ className, children, label, onClick }: TabProps) => ReactElement>;
export {};
//# sourceMappingURL=Tab.d.ts.map