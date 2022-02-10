import { memo, ReactElement } from 'react';
import { Documentation } from '../../../layouts/Documentation';
import { Workspace } from '../../../../components/containers/Workspace';
import { MessageComposer } from '../../../../components/messaging/chat/MessageComposer';
// import { Message } from '../../../../components/messaging/chat/Message';

export const MessageComposerPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{ title: 'ChatMessageComposer' }}
      layout={Documentation}
      title="ChatMessageComposer"
    >
      <MessageComposer />
    </Workspace>
  );
});
