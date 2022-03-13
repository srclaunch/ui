import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';
import { RadialGauge } from '../../../components/charts/RadialGauge';

import {
  Amount,
  Icon,
  InputRow,
  NavigationLink,
  TextColors,
  TextSize,
  TextWeight,
  Title,
  Workspace,
} from '../../../index';
import { Documentation } from '../../layouts/Documentation';

export const RadialGaugePage = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: (
          <>
            <NavigationLink to="/charts">
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
              RadialGauge
            </Title>
          </>
        ),
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="RadialGauge"
    >
      <InputRow>
        {/* <RadialGauge />   */}
        Placeholder, properties needed
      </InputRow>
    </Workspace>
  );
});
