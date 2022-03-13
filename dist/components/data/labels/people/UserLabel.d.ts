import { ReactElement } from 'react';
import { User } from '@srclaunch/types';
import { PersonLabelProps } from './PersonLabel';
import { MoreMenuProps } from '../../../menus/MoreMenu';
import { IconProps } from '../../../media/Icon';
declare type UserLabelProps = {
    menu?: MoreMenuProps | null;
    id?: User['id'];
    to?: string;
    messageIcon?: IconProps;
} & PersonLabelProps;
export declare const UserLabel: import("react").MemoExoticComponent<({ className, to, id, menu, messageIcon, name, image, textSize, }: UserLabelProps) => ReactElement>;
export {};
//# sourceMappingURL=UserLabel.d.ts.map