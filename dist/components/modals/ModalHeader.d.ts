import { ComponentType, ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
import { MoreMenuProps } from '../menus/MoreMenu';
export declare type ModalHeaderProps = ContainerProps & {
    readonly onCloseClick?: () => unknown;
    readonly moreMenu?: MoreMenuProps;
    readonly title?: string | ComponentType;
};
export declare const ModalHeader: import("react").MemoExoticComponent<({ alignment, className, onCloseClick, margin, moreMenu, padding, title, }: ModalHeaderProps) => ReactElement>;
//# sourceMappingURL=ModalHeader.d.ts.map