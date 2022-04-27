import { memo, ReactElement } from 'react';
import { NotificationType } from '@srclaunch/web-application-state';
import { NotificationLabel } from '../notifications/NotificationLabel';

export type ConnectionStatusProps = {
  pollingInterval?: number;
  url?: string;
  successStatus?: number;
};

export const ConnectionStatus = memo(
  ({ ...props }: ConnectionStatusProps): ReactElement => {
    return (
      <NotificationLabel
        type={NotificationType.Success}
        label={'Connected'}
        {...props}
      />
    );
  },
);
