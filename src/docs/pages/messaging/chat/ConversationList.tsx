import { memo, ReactElement } from 'react';
import { Documentation } from '../../../layouts/Documentation';
import { Workspace } from '../../../../components/containers/Workspace';
import { ConversationList } from '../../../../components/messaging/chat/ConversationList';

export const ConversationListPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{ title: 'ConversationList' }}
      layout={Documentation}
      title="ConversationList"
    >
      <ConversationList />
    </Workspace>
  );
});
