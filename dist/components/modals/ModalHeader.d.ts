import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
import { MoreMenuProps } from '../menus/MoreMenu';
export declare type ModalHeaderProps = ContainerProps & {
    readonly onCloseClick?: () => unknown;
    readonly moreMenu?: MoreMenuProps;
    readonly title?: ReactElement;
};
export declare const ModalHeader: import("react").MemoExoticComponent<({ alignment, className, onCloseClick, moreMenu, padding, title, ...props }: ModalHeaderProps) => ReactElement>;
//# sourceMappingURL=ModalHeader.d.ts.map