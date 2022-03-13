import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  Container,
  Depth,
  Heading,
  Icon,
  NavigationLink,
  TextColors,
  TextDecorationLine,
  TextSize,
  TextWeight,
  Title,
  UnorderedList,
  Workspace,
} from '../../../../index';
import { Documentation } from '../../../layouts/Documentation';

export const FormInputsPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: (
          <>
            <NavigationLink
              to="/forms"
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
                Forms
              </Title>
            </NavigationLink>

            <Icon
              name={DualLightIcons.ChevronDoubleForward}
              margin={{ left: Amount.Less, right: Amount.Less }}
              // size={Size.Smaller}
            />

            <Title textSize={TextSize.Larger} textWeight={TextWeight.Most}>
              Inputs
            </Title>
          </>
        ),
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="Inputs"
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
            <NavigationLink to="/forms/inputs/boolean" label="Boolean" />,
            <NavigationLink to="/forms/inputs/locale" label="Locale" />,
            <NavigationLink to="/forms/inputs/media" label="Media" />,
            <NavigationLink to="/forms/inputs/menu" label="Menu" />,
            <NavigationLink to="/forms/inputs/text-input" label="Text" />,
          ]}
          padding={{ left: Amount.Default, right: Amount.Default }}
        />
      </Container>
    </Workspace>
  );
});
