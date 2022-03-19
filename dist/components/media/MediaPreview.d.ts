import { ReactElement } from 'react';
import { Image as ImageType, Video } from '@srclaunch/types';
import { ContainerProps } from '../layout/Container';
export declare type MediaPreviewProps = ContainerProps & {
    readonly media?: readonly (ImageType | Video)[];
};
export declare const MediaPreview: import("react").MemoExoticComponent<({ alignment, borderRadius, className, media, ...props }: MediaPreviewProps) => ReactElement>;
//# sourceMappingURL=MediaPreview.d.ts.map