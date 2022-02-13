import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  Depth,
  NavigationLink,
  Workspace,
} from '../../..';
import { Documentation } from '../../layouts/Documentation';

export const Modals = memo((): ReactElement => {
  return (
    <Workspace
      backgroundColor={BackgroundColors.Default}
      depth={Depth.Low}
      layout={Documentation}
      padding={Amount.Most}
      title="Modals"
    >
      <ul>
        <li>
          <NavigationLink to="/modals/slide-panel" label="SlidePanel" />
        </li>
      </ul>
    </Workspace>
  );
});
