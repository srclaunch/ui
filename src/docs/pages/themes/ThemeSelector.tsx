import { memo, ReactElement } from 'react';
import { Workspace } from '../../../index';
import { Documentation } from '../../layouts/Documentation';
import { ThemeSelector } from '../../../components/themes/ThemeSelector';

export const ThemeSelectorPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{ title: 'ThemeSelector' }}
      layout={Documentation}
      title="ThemeSelector"
    >
      <ThemeSelector width={200} />
    </Workspace>
  );
});
