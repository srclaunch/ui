import { Activity } from '@srclaunch/types';
import { ReactElement } from 'react';
import { DateTimeFormatOptions } from 'luxon';
import { AppearanceProps, CommonComponentProps, LayoutProps } from '../../types';
export declare type ActivityFeedProps = {
    activities: Activity[];
    dateFormat?: DateTimeFormatOptions;
} & CommonComponentProps<HTMLDivElement> & LayoutProps & AppearanceProps;
export declare type ActivityFeedItemProps = {
    dateFormat?: DateTimeFormatOptions;
} & Activity & CommonComponentProps<HTMLDivElement> & LayoutProps & AppearanceProps;
export declare const ActivityFeed: import("react").MemoExoticComponent<({ activities, className, dateFormat, ...props }: ActivityFeedProps) => ReactElement>;
//# sourceMappingURL=ActivityFeed.d.ts.map