import { memo, ReactElement } from 'react';
import { Amount, BackgroundColors, Depth } from '../../../types';

import { Documentation } from '../../layouts/Documentation';
import { Workspace } from '../../../components/containers/Workspace';

export const Forms = memo((): ReactElement => {
  return (
    <Workspace
      backgroundColor={BackgroundColors.Default}
      depth={Depth.Low}
      layout={Documentation}
      padding={Amount.Most}
      title="Forms"
    ></Workspace>
  );
});
