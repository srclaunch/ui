import { memo, ReactElement } from 'react';
import { Documentation } from '../../../layouts/Documentation';
import { Workspace } from '../../../../components/containers/Workspace';
import { Message } from '../../../../components/messaging/chat/Message';

export const MessageListPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{ title: 'SlidePanel' }}
      layout={Documentation}
      title="SlidePanel"
    >
      {/* <Message
        date={new Date().toISOString()}
        message="Lorem ipsum"
        sender={{
          id: '0',
          name: 'Kim Lu-Win',
        }}
      /> */}
    </Workspace>
  );
});
