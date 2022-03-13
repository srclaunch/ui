import { NotificationType } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { AlignHorizontal, Alignment } from '../../types';
import {
  NotificationLabel,
  NotificationLabelProps,
} from '../notifications/NotificationLabel';

type ErrorContainerProps = NotificationLabelProps;

export const ErrorNotification = memo(
  ({ label, showOrb = true, ...props }: ErrorContainerProps): ReactElement => {
    return (
      <NotificationLabel
        alignment={{
          horizontal: AlignHorizontal.Center,
        }}
        label={label}
        showOrb={showOrb}
        type={NotificationType.Error}
        {...props}
      />
    );
  },
);
