import { Activity } from '@srclaunch/types';
import { ReactElement } from 'react';
import { DateTimeFormatOptions } from 'luxon';
import { ContainerProps } from '../layout/Container';
export declare type ActivityFeedProps = {
    activities: Activity[];
    dateFormat?: DateTimeFormatOptions;
} & ContainerProps;
export declare type ActivityFeedItemProps = {
    dateFormat?: DateTimeFormatOptions;
} & Activity & ContainerProps;
export declare const ActivityFeed: import("react").MemoExoticComponent<({ activities, className, dateFormat, ...props }: ActivityFeedProps) => ReactElement>;
//# sourceMappingURL=ActivityFeed.d.ts.map