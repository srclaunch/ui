import { memo, ReactElement } from 'react';
import { SlidePanel, Workspace } from '../../../index';
import { Documentation } from '../../layouts/Documentation';

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
