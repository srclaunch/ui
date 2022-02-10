import { memo, ReactElement } from 'react';
import { Amount, BackgroundColors, Depth, Workspace } from '../../index';
import { Documentation } from '../layouts/Documentation';

export const Introduction = memo((): ReactElement => {
  return (
    <Workspace
      backgroundColor={BackgroundColors.Default}
      depth={Depth.Low}
      header={{
        title: 'Introduction',
      }}
      layout={Documentation}
      padding={Amount.Most}
      title="Introduction"
    ></Workspace>
  );
});
