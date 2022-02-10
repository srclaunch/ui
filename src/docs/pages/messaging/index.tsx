import { memo, ReactElement } from 'react';
import { Workspace } from '../../../index';
import { Documentation } from '../../layouts/Documentation';
import { SlidePanel } from '../../../components/modals/SlidePanel';

export const MessagingPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{ title: 'Messaging' }}
      layout={Documentation}
      title="Messaging"
    >
      {/* <SlidePanel visible={true} /> */}
    </Workspace>
  );
});
