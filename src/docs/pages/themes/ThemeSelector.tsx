import { memo, ReactElement } from 'react';
import { ThemeSelector, Workspace } from '../../../index';
import { Documentation } from '../../layouts/Documentation';

export const ThemeSelectorPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{ title: 'ThemeSelector' }}
      layout={Documentation}
      title="ThemeSelector"
    >
      <ThemeSelector size={{ width: 200 }} />
    </Workspace>
  );
});
