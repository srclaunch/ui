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
  Paragraph,
  Size,
  TextColors,
  TextSize,
  TextWeight,
  Title,
  UnorderedList,
  Workspace,
} from '../../../..';
import { Documentation } from '../../../layouts/Documentation';

export const ButtonsPage = memo((): ReactElement => {
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

            <Title textSize={TextSize.Larger} textWeight={TextWeight.Most}>
              Buttons
            </Title>
          </>
        ),
      }}
      layout={Documentation}
      padding={Amount.Most}
      title="Buttons"
    >
      <Container
        backgroundColor={BackgroundColors.Lightest}
        borderRadius={Amount.Least}
        depth={Depth.High}
        grow={false}
        padding={Amount.Most}
      >
        <Heading lineHeight={Size.Smaller}>Components</Heading>

        <UnorderedList
          items={[
            <NavigationLink
              grow={false}
              to="/forms/buttons/button"
              label="Button"
            />,
            <NavigationLink
              grow={false}
              to="/forms/buttons/menu-button"
              label="MenuButton"
            />,
          ]}
          paddingLeft={Amount.Default}
          paddingRight={Amount.Default}
        />
      </Container>
    </Workspace>
  );
});
