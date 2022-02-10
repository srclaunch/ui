import { ComponentType, ReactElement } from 'react';
import { MoreMenuProps } from '../menus/MoreMenu';
import { ContainerProps } from '../../types';
declare type ModalHeaderProps = ContainerProps<HTMLDivElement, {
    onCloseClick?: () => unknown;
    moreMenu?: MoreMenuProps;
    title?: string | ComponentType;
}>;
export declare const ModalHeader: import("react").MemoExoticComponent<({ alignItems, className, onCloseClick, marginBottom, moreMenu, orientation, padding, title, }: ModalHeaderProps) => ReactElement>;
export {};
//# sourceMappingURL=ModalHeader.d.ts.map