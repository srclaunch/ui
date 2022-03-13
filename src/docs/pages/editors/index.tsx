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
        <Heading lineHeight={Sizes.Smaller}>Components</Heading>

        <UnorderedList
          items={[
            <NavigationLink to="/forms/buttons" label="Buttons" />,
            <NavigationLink to="/forms/inputs" label="Inputs" />,
          ]}
          padding={{ left: Amount.Default, right: Amount.Default }}
        />
      </Container>
    </Workspace>
  );
});
