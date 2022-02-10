import { memo, ReactElement } from 'react';
import { Documentation } from '../../../layouts/Documentation';
import { Workspace } from '../../../../components/containers/Workspace';
import { MessagePreview } from '../../../../components/messaging/chat/MessagePreview';

export const MessagePreviewPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{ title: 'MessagePreview' }}
      layout={Documentation}
      title="MessagePreview"
    >
      <MessagePreview
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        date={new Date().toISOString()}
        sender={{
          id: '0',
          name: 'Susan Williams',
        }}
        subject="Lorem ipsum"
      />

      <br />

      <MessagePreview
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        date={new Date().toISOString()}
        sender={{
          id: '0',
          name: 'Jimbo McGee',
        }}
        subject="Lorem ipsum"
      />
    </Workspace>
  );
});
