import { memo, ReactElement } from 'react';
import { Workspace } from '../../../index';
import { Documentation } from '../../layouts/Documentation';
import { SlidePanel } from '../../../components/modals/SlidePanel';

export const SlidePanelPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{ title: 'SlidePanel' }}
      layout={Documentation}
      title="SlidePanel"
    >
      <SlidePanel visible={true} />
    </Workspace>
  );
});
