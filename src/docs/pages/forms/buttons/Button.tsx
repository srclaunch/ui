import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';

import {
  AlignVertical,
  Amount,
  BackgroundColors,
  Button,
  ButtonType,
  Container,
  Depth,
  Heading,
  Icon,
  NavigationLink,
  Paragraph,
  TextColors,
  TextDecorationLine,
  TextSize,
  TextWeight,
  Title,
  Workspace,
} from '../../../../index';
import { Documentation } from '../../../layouts/Documentation';

export const ButtonPage = memo((): ReactElement => {
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

            <NavigationLink
              to="/forms/buttons"
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
                Buttons
              </Title>
            </NavigationLink>

            <Icon
              name={DualLightIcons.ChevronDoubleForward}
              margin={{ left: Amount.Less, right: Amount.Less }}
              // size={Size.Smaller}
            />

            <Title textSize={TextSize.Larger} textWeight={TextWeight.Most}>
              Button
            </Title>
          </>
        ),
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="Button"
    >
      <Container
        background={{ color: BackgroundColors.Lightest }}
        borderRadius={{ all: Amount.Least }}
        depth={Depth.High}
        margin={{ bottom: Amount.Default }}
        padding={{ all: Amount.Most }}
      >
        <Heading>Description</Heading>

        <Paragraph>
          The <b>&lt;Button&gt;</b> component is used to create a button.
        </Paragraph>
      </Container>

      <Container
        background={{ color: BackgroundColors.Lightest }}
        borderRadius={{ all: Amount.Least }}
        depth={Depth.High}
        margin={{ bottom: Amount.Default }}
        padding={{ all: Amount.Most }}
      >
        <Heading>Default</Heading>

        <Container
          alignment={{
            vertical: AlignVertical.Baseline,
          }}
          background={{ color: BackgroundColors.Lighter }}
          borderRadius={{ all: Amount.Least }}
          depth={Depth.Lower}
          padding={{ all: Amount.Most }}
        >
          <Button>Hello, world!</Button>
        </Container>
      </Container>

      <Container
        background={{ color: BackgroundColors.Lightest }}
        borderRadius={{ all: Amount.Least }}
        depth={Depth.High}
        margin={{ bottom: Amount.Default }}
        padding={{ all: Amount.Most }}
      >
        <Heading>Primary</Heading>

        <Container
          alignment={{
            vertical: AlignVertical.Baseline,
          }}
          background={{ color: BackgroundColors.Lighter }}
          borderRadius={{ all: Amount.Least }}
          depth={Depth.Lower}
          padding={{ all: Amount.Most }}
        >
          <Button type={ButtonType.Primary}>Primary</Button>
        </Container>
      </Container>
    </Workspace>
  );
});
