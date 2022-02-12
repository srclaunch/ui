import { Video as VideoType } from '@srclaunch/types';
import { ReactElement } from 'react';
import { HeightProps, WidthProps } from '../../types';
export declare type VideoProps = {
    readonly className?: string;
    readonly description?: string;
} & HeightProps & VideoType & WidthProps;
export declare const Video: import("react").MemoExoticComponent<({ className, height, url, width, ...props }: VideoProps) => ReactElement>;
//# sourceMappingURL=Video.d.ts.map