import { memo, ReactElement } from 'react';
import { NotificationLabel } from '../notifications/NotificationLabel';
import { NotificationType } from '@srclaunch/types';

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
