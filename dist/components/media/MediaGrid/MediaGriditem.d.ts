import { ReactElement } from 'react';
import { Image as ImageType, Video as VideoType } from '@srclaunch/types';
import { Amount } from '../../../types';
import { MoreMenuProps } from '../../menus/MoreMenu';
import { ContainerProps } from '../../layout/Container';
export declare type MediaGridItem = ContainerProps<HTMLDivElement, {
    description?: string | null;
    element?: ReactElement;
    images?: ImageType[];
    minHeight?: Amount | number;
    moreMenu?: MoreMenuProps;
    title?: string;
    url?: string;
    video?: VideoType;
}>;
export declare const MediaGridItem: import("react").MemoExoticComponent<({ borderRadius, description, images, minHeight, moreMenu, onClick, title, url, video, ...props }: MediaGridItem) => JSX.Element>;
//# sourceMappingURL=MediaGriditem.d.ts.map