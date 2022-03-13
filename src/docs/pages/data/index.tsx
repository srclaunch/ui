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

export const DataPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: 'Data',
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="Data"
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
            <NavigationLink to="/data/datagrids" label="DataGrids" />,
            <NavigationLink to="/data/entities" label="Entities" />,
            <NavigationLink to="/data/labels" label="Labels" />,
          ]}
          padding={{ left: Amount.Default, right: Amount.Default }}
        />
      </Container>
    </Workspace>
  );
});
