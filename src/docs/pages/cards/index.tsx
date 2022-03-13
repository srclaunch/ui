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

export const CardsPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: 'Cards',
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="Cards"
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
            <NavigationLink to="/cards/card" label="Card" />,
            <NavigationLink to="/cards/title-card" label="TitleCard" />,
          ]}
          padding={{ left: Amount.Default, right: Amount.Default }}
        />
      </Container>
    </Workspace>
  );
});
