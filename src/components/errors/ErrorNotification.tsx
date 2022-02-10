import { memo, ReactElement } from 'react';
import { NotificationType } from '@srclaunch/types';
import { Align } from '../../types';
import {
  NotificationLabel,
  NotificationLabelProps,
} from '../notifications/NotificationLabel';

type ErrorContainerProps = NotificationLabelProps<{}>;

export const ErrorNotification = memo(
  ({ label, showOrb = true, ...props }: ErrorContainerProps): ReactElement => {
    return (
      <NotificationLabel
        alignItems={Align.Center}
        label={label}
        showOrb={showOrb}
        type={NotificationType.Error}
        {...props}
      />
    );
  },
);
