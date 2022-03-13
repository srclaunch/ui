import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';
import { Page } from '../../../components/containers/Page';

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

export const PagePage = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: (
          <>
            <NavigationLink
              to="/containers"
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
                Containers
              </Title>
            </NavigationLink>

            <Icon
              name={DualLightIcons.ChevronDoubleForward}
              margin={{ left: Amount.Less, right: Amount.Less }}
              // size={Size.Smaller}
            />

            <Title textSize={TextSize.Larger} textWeight={TextWeight.Most}>
              Page
            </Title>
          </>
        ),
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="Page"
    >
      <InputRow>
        <Page />
        Placeholder, properties needed
      </InputRow>
    </Workspace>
  );
});
