import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  Container,
  Icon,
  InputRow,
  MenuButton,
  NavigationLink,
  TextColors,
  TextDecorationLine,
  TextSize,
  TextWeight,
  Title,
  Workspace,
} from '../../../../index';
import { Documentation } from '../../../layouts/Documentation';

export const MenuButtonPage = memo((): ReactElement => {
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
              MenuButton
            </Title>
          </>
        ),
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="MenuButton"
    >
      <InputRow>
        <MenuButton
          label="Choose an action"
          menu={[{ label: 'Hello' }, { label: 'World' }]}
          size={{ width: 250 }}
        />
        <br />
        <br />
        <Container background={{ color: BackgroundColors.Default }}>
          This should be placed behing the menu
        </Container>
      </InputRow>
    </Workspace>
  );
});
