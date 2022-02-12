import { NotificationType } from '@srclaunch/types';
import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
export declare type NotificationLabelProps = {
    readonly label?: string;
    readonly showOrb?: boolean;
    readonly type?: NotificationType;
} & ContainerProps<HTMLDivElement>;
export declare const NotificationLabel: import("react").MemoExoticComponent<({ backgroundColor, children, className, grow, label, orientation, showOrb, type, ...props }: NotificationLabelProps) => ReactElement>;
//# sourceMappingURL=NotificationLabel.d.ts.map