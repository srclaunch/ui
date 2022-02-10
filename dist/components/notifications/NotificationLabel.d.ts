import { ReactElement } from 'react';
import { NotificationType } from '@srclaunch/types';
import { ContainerProps } from '../layout/Container';
export declare type NotificationLabelProps<T = {}> = ContainerProps<HTMLDivElement, {
    label?: string;
    showOrb?: boolean;
    type?: NotificationType;
}> & T;
export declare const NotificationLabel: import("react").MemoExoticComponent<({ backgroundColor, children, className, grow, label, orientation, showOrb, type, ...props }: NotificationLabelProps) => ReactElement>;
//# sourceMappingURL=NotificationLabel.d.ts.map