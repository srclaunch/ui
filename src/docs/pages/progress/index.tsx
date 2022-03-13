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

export const Progress = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: 'Progress',
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="Progress"
    >
      <Container
        background={{ color: BackgroundColors.Lightest }}
        borderRadius={{ all: Amount.Least }}
        depth={Depth.High}
        padding={{ all: Amount.Most }}
      >
        <Heading>Progress Components</Heading>

        <UnorderedList
          items={[
            <NavigationLink
              to="/progress/loading-overlay"
              label="LoadingOverlay"
            />,
          ]}
        />
      </Container>
    </Workspace>
  );
});
