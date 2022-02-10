import { memo, ReactElement } from 'react';
import { Amount, Orientation } from '../../../../types';
import { Workspace } from '../../../../components/containers/Workspace';
import { Container } from '../../../../components/layout/Container';
import { ConversationNavigation } from '../../../../components/messaging/chat/ConversationNavigation';
import { ConversationList } from '../../../../components/messaging/chat/ConversationList';
import { MessageComposer } from '../../../../components/messaging/chat/MessageComposer';

import { Documentation } from '../../../layouts/Documentation';
// import { SlidePanel } from '../../../../components/modals/SlidePanel';

export const ChatMessagingPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{ title: 'Chat Messaging' }}
      layout={Documentation}
      title="Chat Messaging"
    >
      <Container orientation={Orientation.Horizontal}>
        <ConversationNavigation borderRadius={Amount.More} width={200} />
        <ConversationList marginLeft={Amount.More} width={360} />
        <MessageComposer borderRadius={Amount.Least} marginLeft={Amount.More} />
      </Container>
    </Workspace>
  );
});
