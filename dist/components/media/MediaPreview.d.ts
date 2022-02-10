import { ReactElement } from 'react';
import { Image as ImageType, Video } from '@srclaunch/types';
import { ContainerProps } from '../layout/Container';
export declare type MediaPreviewProps = ContainerProps<HTMLDivElement, {
    media?: (ImageType | Video)[];
}>;
export declare const MediaPreview: import("react").MemoExoticComponent<({ borderRadius, className, height, media, orientation, ...props }: MediaPreviewProps) => ReactElement>;
//# sourceMappingURL=MediaPreview.d.ts.map