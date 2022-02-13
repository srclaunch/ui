import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  Container,
  Depth,
  Heading,
  NavigationLink,
  Size,
  UnorderedList,
  Workspace,
} from '../../..';
import { Documentation } from '../../layouts/Documentation';

export const Animation = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: 'Animation',
      }}
      layout={Documentation}
      padding={Amount.Most}
      title="Animation"
    >
      <Container
        backgroundColor={BackgroundColors.Lightest}
        borderRadius={Amount.Least}
        depth={Depth.High}
        grow={false}
        padding={Amount.Most}
      >
        <Heading lineHeight={Size.Smaller}>Components</Heading>
      </Container>
    </Workspace>
  );
});
