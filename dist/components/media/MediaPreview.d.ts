import { Image as ImageType, Video } from '@srclaunch/types';
import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
export declare type MediaPreviewProps = {
    readonly media?: readonly (ImageType | Video)[];
} & ContainerProps<HTMLDivElement>;
export declare const MediaPreview: import("react").MemoExoticComponent<({ borderRadius, className, height, media, orientation, ...props }: MediaPreviewProps) => ReactElement>;
//# sourceMappingURL=MediaPreview.d.ts.map