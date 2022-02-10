import { ReactElement } from 'react';
import { User } from '@srclaunch/types';
import { PersonLabelProps } from './PersonLabel';
import { MoreMenuProps } from '../../../menus/MoreMenu';
import { IconProps } from '../../../../types';
declare type UserLabelProps = PersonLabelProps<{
    menu?: MoreMenuProps | null;
    id?: User['id'];
    to?: string;
    messageIcon?: IconProps;
}>;
export declare const UserLabel: import("react").MemoExoticComponent<({ className, to, id, menu, messageIcon, name, image, size, textSize, }: UserLabelProps) => ReactElement>;
export {};
//# sourceMappingURL=UserLabel.d.ts.map