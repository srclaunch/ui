import { Activity } from '@srclaunch/types';
import { ReactElement } from 'react';
import { DateTimeFormatOptions } from 'luxon';
import { AppearanceProps, CommonComponentProps, LayoutProps } from '../../types';
declare type ActivityFeedProps = CommonComponentProps<LayoutProps<AppearanceProps<{
    activities: Activity[];
    dateFormat?: DateTimeFormatOptions;
}>>>;
export declare const ActivityFeed: import("react").MemoExoticComponent<({ activities, className, dateFormat, ...props }: ActivityFeedProps) => ReactElement>;
export {};
//# sourceMappingURL=ActivityFeed.d.ts.map