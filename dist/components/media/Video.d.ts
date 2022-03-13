import { Video as VideoType } from '@srclaunch/types';
import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
export declare type VideoProps = {
    readonly className?: string;
    readonly description?: string;
} & VideoType & ContainerProps;
export declare const Video: import("react").MemoExoticComponent<({ className, url, ...props }: VideoProps) => ReactElement>;
//# sourceMappingURL=Video.d.ts.map