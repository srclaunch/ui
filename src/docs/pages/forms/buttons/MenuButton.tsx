import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  Container,
  Depth,
  Icon,
  InputRow,
  MenuButton,
  NavigationLink,
  Size,
  TextColors,
  TextSize,
  TextWeight,
  Title,
  Workspace,
} from '../../../../';
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
              MenuButton
            </Title>
          </>
        ),
      }}
      layout={Documentation}
      padding={Amount.Most}
      title="MenuButton"
    >
      <InputRow>
        <MenuButton
          label="Choose an action"
          menu={[{ label: 'Hello' }, { label: 'World' }]}
          width={250}
        />
        <br />
        <br />
        <Container backgroundColor={BackgroundColors.Default}>
          This should be placed behing the menu
        </Container>
      </InputRow>
    </Workspace>
  );
});
