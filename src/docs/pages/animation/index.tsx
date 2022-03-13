import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  Container,
  Depth,
  Heading,
  NavigationLink,
  Sizes,
  UnorderedList,
  Workspace,
} from '../../../index';
import { Documentation } from '../../layouts/Documentation';

export const Animation = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: 'Animation',
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="Animation"
    >
      <Container
        background={{ color: BackgroundColors.Lightest }}
        borderRadius={{ all: Amount.Least }}
        depth={Depth.High}
        padding={{ all: Amount.Most }}
      >
        <Heading lineHeight={Sizes.Smaller}>Components</Heading>
      </Container>
    </Workspace>
  );
});
