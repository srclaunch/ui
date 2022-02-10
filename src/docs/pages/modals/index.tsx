import { memo, ReactElement } from 'react';
import { Amount, BackgroundColors, Depth, Workspace } from '../../../index';
import { Documentation } from '../../layouts/Documentation';

export const Modals = memo((): ReactElement => {
  return (
    <Workspace
      backgroundColor={BackgroundColors.Default}
      depth={Depth.Low}
      layout={Documentation}
      padding={Amount.Most}
      title="Modals"
    ></Workspace>
  );
});
