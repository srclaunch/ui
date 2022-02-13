import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
import { ListItemProps } from './ListItem';
export declare type OrderedListProps = {
    readonly items: readonly ListItemProps[];
} & ContainerProps<HTMLUListElement>;
export declare const OrderedList: import("react").MemoExoticComponent<({ as, children, ...props }: OrderedListProps) => ReactElement>;
//# sourceMappingURL=OrderedList.d.ts.map