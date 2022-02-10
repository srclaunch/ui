import { memo, ReactElement } from 'react';
import { Align, Amount, BackgroundColors, Depth } from '../../../types';
import { Documentation } from '../../layouts/Documentation';
import { Workspace } from '../../../components/containers/Workspace';
import { MoreMenu } from '../../../components/menus/MoreMenu';
import { Container } from '../../..';

export const MoreMenuPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: 'MoreMenu',
      }}
      layout={Documentation}
      title="MoreMenu"
    >
      <Container
        backgroundColor={BackgroundColors.Lightest}
        borderRadius={Amount.More}
        grow={false}
        padding={Amount.Most}
      >
        <MoreMenu
          menu={[
            {
              label: 'Hello',
            },
            {
              label: 'World',
            },
          ]}
        />
      </Container>

      <Container
        backgroundColor={BackgroundColors.Lightest}
        borderRadius={Amount.More}
        grow={false}
        padding={Amount.Most}
      >
        <MoreMenu
          alignContent={Align.Left}
          menu={[
            {
              label: 'Hello',
            },
            {
              label: 'World',
            },
          ]}
        />
      </Container>

      <Container
        alignItems={Align.Right}
        backgroundColor={BackgroundColors.Lightest}
        borderRadius={Amount.More}
        grow={false}
        padding={Amount.Most}
      >
        <MoreMenu
          alignContent={Align.Right}
          menu={[
            {
              label: 'Hello',
            },
            {
              label: 'World',
            },
          ]}
        />
      </Container>
    </Workspace>
  );
});
