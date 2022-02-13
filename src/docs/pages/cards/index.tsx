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

export const Forms = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: 'Forms',
      }}
      layout={Documentation}
      padding={Amount.Most}
      title="Forms"
    >
      <Container
        backgroundColor={BackgroundColors.Lightest}
        borderRadius={Amount.Least}
        depth={Depth.High}
        grow={false}
        padding={Amount.Most}
      >
        <Heading lineHeight={Size.Smaller}>Components</Heading>

        <UnorderedList
          items={[
            <NavigationLink to="/forms/buttons" label="Buttons" />,
            <NavigationLink to="/forms/inputs" label="Inputs" />,
          ]}
          paddingLeft={Amount.Default}
          paddingRight={Amount.Default}
        />
      </Container>
    </Workspace>
  );
});
