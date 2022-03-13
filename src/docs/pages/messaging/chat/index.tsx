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
  Sizes,
  TextColors,
  TextDecorationLine,
  TextSize,
  TextWeight,
  Title,
  UnorderedList,
  Workspace,
} from '../../../../index';
import { Documentation } from '../../../layouts/Documentation';

export const ChatPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: (
          <>
            <NavigationLink
              to="/messaging"
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
                Messaging
              </Title>
            </NavigationLink>

            <Icon
              name={DualLightIcons.ChevronDoubleForward}
              margin={{ left: Amount.Less, right: Amount.Less }}
              // size={Size.Smaller}
            />

            <Title textSize={TextSize.Larger} textWeight={TextWeight.Most}>
              Chat
            </Title>
          </>
        ),
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="Chat"
    >
      <Container
        background={{ color: BackgroundColors.Lightest }}
        borderRadius={{ all: Amount.Least }}
        depth={Depth.High}
        padding={{ all: Amount.Most }}
      >
        <Heading lineHeight={Sizes.Smaller}>Components</Heading>

        <UnorderedList
          items={[
            <NavigationLink
              to="/messaging/chat/conversations"
              label="Conversations"
            />,
            <NavigationLink to="/messaging/chat/messages" label="Messages" />,
          ]}
          padding={{ left: Amount.Default, right: Amount.Default }}
        />
      </Container>
    </Workspace>
  );
});
