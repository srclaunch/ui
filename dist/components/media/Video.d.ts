import { ReactElement } from 'react';
import { Video as VideoType } from '@srclaunch/types';
import { DimensionProps } from '../../types';
declare type VideoProps = DimensionProps<{
    className?: string;
    description?: string;
} & VideoType>;
export declare const Video: import("react").MemoExoticComponent<({ className, height, url, width, ...props }: VideoProps) => ReactElement>;
export {};
//# sourceMappingURL=Video.d.ts.map