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
} from '../../../index';
import { Documentation } from '../../layouts/Documentation';

export const Forms = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: 'Forms',
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="Forms"
    >
      <Container
        background={{ color: BackgroundColors.Lightest }}
        borderRadius={{ all: Amount.Least }}
        depth={Depth.High}
        padding={{ all: Amount.Most }}
      >
        <Heading>Components</Heading>

        <UnorderedList
          items={[
            <NavigationLink to="/forms/buttons" label="Buttons" />,
            <NavigationLink to="/forms/inputs" label="Inputs" />,
          ]}
        />
      </Container>
    </Workspace>
  );
});
