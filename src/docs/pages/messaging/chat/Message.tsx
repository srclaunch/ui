import { memo, ReactElement } from 'react';
import { Workspace } from '../../../../index';
import { Documentation } from '../../../layouts/Documentation';
import { Message } from '../../../../components/messaging/chat/Message';

export const MessagePage = memo((): ReactElement => {
  return (
    <Workspace
      header={{ title: 'ChatMessage' }}
      layout={Documentation}
      title="ChatMessage"
    >
      <Message
        body="Lorem ipsum "
        date={new Date().toISOString()}
        sender={{
          id: '0',
          name: 'Serena Williams',
        }}
      />
    </Workspace>
  );
});
