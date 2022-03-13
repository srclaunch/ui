import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  Container,
  Depth,
  Heading,
  NavigationLink,
  UnorderedList,
  Workspace,
} from '../../../index';
import { Documentation } from '../../layouts/Documentation';

export const ContainersPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: 'Containers',
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="Containers"
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
            <NavigationLink to="/containers/page" label="Page" />,
            <NavigationLink
              to="/containers/web-application"
              label="WebApplication"
            />,
            <NavigationLink to="/containers/workspace" label="Workspace" />,
          ]}
          padding={{ left: Amount.Default, right: Amount.Default }}
        />
      </Container>
    </Workspace>
  );
});
