import { ComponentType, ReactElement } from 'react';
import { ContainerProps } from '../../types';
import { MoreMenuProps } from '../menus/MoreMenu';
export declare type ModalHeaderProps = {
    readonly onCloseClick?: () => unknown;
    readonly moreMenu?: MoreMenuProps;
    readonly title?: string | ComponentType;
} & ContainerProps<HTMLDivElement>;
export declare const ModalHeader: import("react").MemoExoticComponent<({ alignItems, className, onCloseClick, marginBottom, moreMenu, orientation, padding, title, }: ModalHeaderProps) => ReactElement>;
//# sourceMappingURL=ModalHeader.d.ts.map