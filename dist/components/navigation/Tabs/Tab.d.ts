import { ReactElement } from 'react';
import { CommonComponentProps } from '../../../types';
import { ContainerProps } from '../../layout/Container';
export declare type TabProps = {
    readonly label: string;
    readonly selected?: boolean;
    readonly visible?: boolean;
} & CommonComponentProps<HTMLDivElement> & ContainerProps<HTMLDivElement>;
export declare const Tab: import("react").MemoExoticComponent<({ className, children, label, onClick }: TabProps) => ReactElement>;
//# sourceMappingURL=Tab.d.ts.map