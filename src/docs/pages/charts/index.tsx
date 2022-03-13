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

export const ChartsPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: 'Charts',
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="Charts"
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
            <NavigationLink to="/charts/linear-gauge" label="LinearGauge" />,
            <NavigationLink to="/charts/pie-chart" label="PieChart" />,
            <NavigationLink
              to="/charts/progress-meter"
              label="ProgressMeter"
            />,
            <NavigationLink to="/charts/radial-chart" label="RadialChart" />,
            <NavigationLink to="/charts/radial-gauge" label="RadialGauge" />,
          ]}
          padding={{ left: Amount.Default, right: Amount.Default }}
        />
      </Container>
    </Workspace>
  );
});
