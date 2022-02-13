import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  Container,
  Depth,
  Heading,
  Icon,
  IconProps,
  ListItem,
  NavigationLink,
  Size,
  TextColors,
  TextSize,
  TextWeight,
  Title,
  UnorderedList,
  Workspace,
} from '../../../..';
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
              Inputs
            </Title>
          </>
        ),
      }}
      layout={Documentation}
      padding={Amount.Most}
      title="Inputs"
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
            <NavigationLink to="/forms/inputs/boolean" label="Boolean" />,
            <NavigationLink to="/forms/inputs/locale" label="Locale" />,
            <NavigationLink to="/forms/inputs/media" label="Media" />,
            <NavigationLink to="/forms/inputs/menu" label="Menu" />,
            <NavigationLink to="/forms/inputs/text" label="Text" />,
          ]}
          paddingLeft={Amount.Default}
          paddingRight={Amount.Default}
        />
      </Container>
    </Workspace>
  );
});
