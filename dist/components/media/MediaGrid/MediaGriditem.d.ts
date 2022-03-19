import { Image as ImageType, Video as VideoType } from '@srclaunch/types';
import { ReactElement } from 'react';
import { Amount } from '../../../types';
import { ContainerProps } from '../../layout/Container';
import { MoreMenuProps } from '../../menus/MoreMenu';
export declare type MediaGridItem = ContainerProps & {
    readonly description?: string | null;
    readonly element?: ReactElement;
    readonly images?: readonly ImageType[];
    readonly minHeight?: Amount | number;
    readonly moreMenu?: MoreMenuProps;
    readonly title?: string;
    readonly url?: string;
    readonly video?: VideoType;
};
export declare const MediaGridItem: import("react").MemoExoticComponent<({ background, borderRadius, description, images, minHeight, moreMenu, title, url, video, ...props }: MediaGridItem) => JSX.Element>;
//# sourceMappingURL=MediaGriditem.d.ts.map