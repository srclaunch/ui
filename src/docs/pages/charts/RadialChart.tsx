import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';
import { RadialChart } from '../../../components/charts/RadialChart';

import {
  Amount,
  Icon,
  InputRow,
  NavigationLink,
  TextColors,
  TextDecorationLine,
  TextSize,
  TextWeight,
  Title,
  Workspace,
} from '../../../index';
import { Documentation } from '../../layouts/Documentation';

export const RadialChartPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: (
          <>
            <NavigationLink
              to="/charts"
              hover={{
                textDecoration: {
                  line: TextDecorationLine.Underline,
                },
              }}
              textDecoration={{
                line: TextDecorationLine.None,
              }}
            >
              <Title
                textColor={TextColors.Primary}
                textSize={TextSize.Larger}
                textWeight={TextWeight.Most}
              >
                Charts
              </Title>
            </NavigationLink>

            <Icon
              name={DualLightIcons.ChevronDoubleForward}
              margin={{ left: Amount.Less, right: Amount.Less }}
              // size={Size.Smaller}
            />

            <Title textSize={TextSize.Larger} textWeight={TextWeight.Most}>
              Radial Chart
            </Title>
          </>
        ),
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="RadialChart"
    >
      <InputRow>
        {/* <RadialChart />   */}
        Placeholder, properties needed
      </InputRow>
    </Workspace>
  );
});
