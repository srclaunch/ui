import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';

import {
  Align,
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
  Size,
  TextColors,
  TextSize,
  TextWeight,
  Title,
  Workspace,
} from '../../../..';
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
                underline: true,
              }}
              underline={false}
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
              marginLeft={Amount.Less}
              marginRight={Amount.Less}
              size={Size.Smaller}
            />

            <NavigationLink
              to="/forms/buttons"
              hover={{
                underline: true,
              }}
              underline={false}
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
              marginLeft={Amount.Less}
              marginRight={Amount.Less}
              size={Size.Smaller}
            />

            <Title textSize={TextSize.Larger} textWeight={TextWeight.Most}>
              Button
            </Title>
          </>
        ),
      }}
      layout={Documentation}
      padding={Amount.Most}
      title="Button"
    >
      <Container
        backgroundColor={BackgroundColors.Lightest}
        borderRadius={Amount.Least}
        depth={Depth.High}
        grow={false}
        marginBottom={Amount.Default}
        padding={Amount.Most}
      >
        <Heading lineHeight={Size.Smaller}>Description</Heading>

        <Paragraph>
          The <b>&lt;Button&gt;</b> component is used to create a button.
        </Paragraph>
      </Container>

      <Container
        backgroundColor={BackgroundColors.Lightest}
        borderRadius={Amount.Least}
        depth={Depth.High}
        grow={false}
        marginBottom={Amount.Default}
        padding={Amount.Most}
      >
        <Heading lineHeight={Size.Smaller}>Default</Heading>

        <Container
          alignItems={Align.Baseline}
          backgroundColor={BackgroundColors.Lighter}
          borderRadius={Amount.Least}
          depth={Depth.Lower}
          grow={false}
          padding={Amount.Most}
        >
          <Button grow={false}>Hello, world!</Button>
        </Container>
      </Container>

      <Container
        backgroundColor={BackgroundColors.Lightest}
        borderRadius={Amount.Least}
        depth={Depth.High}
        grow={false}
        marginBottom={Amount.Default}
        padding={Amount.Most}
      >
        <Heading lineHeight={Size.Smaller}>Primary</Heading>

        <Container
          alignItems={Align.Baseline}
          backgroundColor={BackgroundColors.Lighter}
          borderRadius={Amount.Least}
          depth={Depth.Lower}
          grow={false}
          padding={Amount.Most}
        >
          <Button type={ButtonType.Primary}>Primary</Button>
        </Container>
      </Container>
    </Workspace>
  );
});
