import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  Container,
  MoreMenu,
  Workspace,
} from '../../../index';
import { AlignHorizontal } from '../../../types';
import { Documentation } from '../../layouts/Documentation';

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
        background={{ color: BackgroundColors.Lightest }}
        borderRadius={{ all: Amount.More }}
        padding={{ all: Amount.Most }}
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
        background={{ color: BackgroundColors.Lightest }}
        borderRadius={{ all: Amount.More }}
        padding={{ all: Amount.Most }}
      >
        <MoreMenu
          alignment={{
            horizontal: AlignHorizontal.Left,
          }}
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
        alignment={{
          horizontal: AlignHorizontal.Right,
        }}
        background={{ color: BackgroundColors.Lightest }}
        borderRadius={{ all: Amount.More }}
        padding={{ all: Amount.Most }}
      >
        <MoreMenu
          alignment={{ horizontal: AlignHorizontal.Right }}
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
