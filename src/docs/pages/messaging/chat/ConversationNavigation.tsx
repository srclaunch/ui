import { memo, ReactElement } from 'react';
import { Documentation } from '../../../layouts/Documentation';
import { Workspace } from '../../../../components/containers/Workspace';
import { Container } from '../../../../components/layout/Container';
import { ConversationNavigation } from '../../../../components/messaging/chat/ConversationNavigation';

export const ConversationNavigationPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{ title: 'ConversationNavigation' }}
      layout={Documentation}
      title="ConversationNavigation"
    >
      <Container width={300}>
        <ConversationNavigation />
      </Container>
    </Workspace>
  );
});
