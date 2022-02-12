import { memo, ReactElement } from 'react';

import { NavigationLink, Workspace } from '../../..';
import { Amount, BackgroundColors, Depth } from '../../../types';
import { Documentation } from '../../layouts/Documentation';

export const Forms = memo((): ReactElement => {
  return (
    <Workspace
      backgroundColor={BackgroundColors.Default}
      depth={Depth.Low}
      layout={Documentation}
      padding={Amount.Most}
      title="Forms"
    >
      <ul>
        <li>
          <NavigationLink to="/forms/button">Buttons</NavigationLink>
        </li>
      </ul>
    </Workspace>
  );
});
