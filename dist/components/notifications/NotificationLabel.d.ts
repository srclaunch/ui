import { ReactElement } from 'react';
import { NotificationType } from '@srclaunch/types';
import { ContainerProps } from '../layout/Container';
export declare type NotificationLabelProps = {
    readonly label?: string;
    readonly showOrb?: boolean;
    readonly type?: NotificationType;
} & ContainerProps<HTMLDivElement>;
export declare const NotificationLabel: import("react").MemoExoticComponent<({ alignment, background, borderRadius, children, className, label, padding, showOrb, type, ...props }: NotificationLabelProps) => ReactElement>;
//# sourceMappingURL=NotificationLabel.d.ts.map