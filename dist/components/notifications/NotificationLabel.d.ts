import { ReactElement } from 'react';
import { NotificationType } from '@srclaunch/types';
import { ContainerProps } from '../layout/Container';
import { TextProps } from '../typography/Text';
export declare type NotificationLabelProps = ContainerProps & TextProps & {
    readonly label?: string;
    readonly showOrb?: boolean;
    readonly type?: NotificationType;
};
export declare const NotificationLabel: import("react").MemoExoticComponent<({ alignment, background, borderRadius, children, className, label, padding, showOrb, type, ...props }: NotificationLabelProps) => ReactElement>;
//# sourceMappingURL=NotificationLabel.d.ts.map