import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  Depth,
  NavigationLink,
  Workspace,
} from '../../../..';
import { Documentation } from '../../../layouts/Documentation';

export const ButtonsPage = memo((): ReactElement => {
  return (
    <Workspace
      backgroundColor={BackgroundColors.Default}
      depth={Depth.Low}
      layout={Documentation}
      padding={Amount.Most}
      title="Buttons"
    >
      Buttons
    </Workspace>
  );
});
