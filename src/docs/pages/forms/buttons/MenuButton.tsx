import { memo, ReactElement } from 'react';
import { Amount, BackgroundColors, Depth } from '../../../../types';
import { Documentation } from '../../../layouts/Documentation';
import { Container } from '../../../../components/layout/Container';
import { Workspace } from '../../../../components/containers/Workspace';
import { InputRow } from '../../../../components/forms/layout/InputRow';
import { MenuButton } from '../../../../components/forms/buttons/MenuButton';

export const MenuButtonPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{ title: 'MenuButton' }}
      layout={Documentation}
      padding={Amount.Most}
      title="MenuButton"
    >
      <InputRow>
        <MenuButton
          label="Choose an action"
          menu={[{ label: 'Hello' }, { label: 'World' }]}
          width={250}
        />
        <br />
        <br />
        <Container backgroundColor={BackgroundColors.Default}>
          This should be placed behing the menu
        </Container>
      </InputRow>
    </Workspace>
  );
});
