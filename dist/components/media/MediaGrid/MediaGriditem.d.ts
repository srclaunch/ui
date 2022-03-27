import { Image as ImageType, Video as VideoType } from '@srclaunch/types';
import { ReactElement } from 'react';
import { Amount } from '../../../types';
import { ContainerProps } from '../../layout/Container';
import { MoreMenuProps } from '../../menus/MoreMenu';
export declare type MediaGridItemProps = ContainerProps & {
    readonly description?: string | null;
    readonly element?: ReactElement;
    readonly image?: ImageType;
    readonly minHeight?: Amount | number;
    readonly menu?: MoreMenuProps;
    readonly title?: string;
    readonly url?: string;
    readonly video?: VideoType;
};
export declare const MediaGridItem: import("react").MemoExoticComponent<({ alignment, background, borderRadius, description, image, minHeight, menu, title, url, video, ...props }: MediaGridItemProps) => JSX.Element>;
//# sourceMappingURL=MediaGriditem.d.ts.map