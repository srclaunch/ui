import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';
import { MessagePreview } from '../../../../../components/messaging/chat/MessagePreview';

import {
  Amount,
  Icon,
  NavigationLink,
  TextColors,
  TextDecorationLine,
  TextSize,
  TextWeight,
  Title,
  Workspace,
} from '../../../../../index';
import { Documentation } from '../../../../layouts/Documentation';

export const MessagePreviewPage = memo((): ReactElement => {
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

            <NavigationLink
              to="/messaging/chat"
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
                Chat
              </Title>
            </NavigationLink>

            <Icon
              name={DualLightIcons.ChevronDoubleForward}
              margin={{ left: Amount.Less, right: Amount.Less }}
              // size={Size.Smaller}
            />

            <NavigationLink
              to="/messaging/chat/messages"
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
                Messages
              </Title>
            </NavigationLink>

            <Icon
              name={DualLightIcons.ChevronDoubleForward}
              margin={{ left: Amount.Less, right: Amount.Less }}
              // size={Size.Smaller}
            />

            <Title textSize={TextSize.Larger} textWeight={TextWeight.Most}>
              Message Preview
            </Title>
          </>
        ),
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="ChatMessagePreview"
    >
      <MessagePreview
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        date={new Date().toISOString()}
        sender={{
          id: '0',
          name: 'Susan Williams',
        }}
        subject="Lorem ipsum"
      />

      <br />

      <MessagePreview
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        date={new Date().toISOString()}
        sender={{
          id: '0',
          name: 'Jimbo McGee',
        }}
        subject="Lorem ipsum"
      />
    </Workspace>
  );
});
