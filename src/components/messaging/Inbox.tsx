import { ReactElement, memo } from 'react';
import { ChatMessage } from '@srclaunch/types';
import { Container, ContainerProps } from '../../components/layout/Container';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  Fill,
  Orientation,
} from '../../types';
import { MessageComposer } from './MessageComposer';
import { RouterView } from '../navigation/RouterView';
import { ConversationList } from './ConversationList';
import { ConversationNavigation } from './ConversationNavigation';

export type InboxProps = ContainerProps;

export const Inbox = memo(
  ({ className = '', size = {}, ...props }: InboxProps): ReactElement => {
    return (
      <Container
        className={`${className} inbox`}
        alignment={{
          horizontal: AlignHorizontal.Stretch,
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Stretch,
        }}
        size={{
          fill: Fill.Both,
          ...size,
        }}
        {...props}
      >
        <ConversationNavigation
          borderRadius={{ all: Amount.More }}
          size={{
            width: 160,
          }}
        />

        <ConversationList
          margin={{ left: Amount.More }}
          size={{
            width: 280,
          }}
        />

        <RouterView
          routes={[
            {
              component: () => <Container>Select a message</Container>,
              path: 'inbox',
            },
            {
              component: () => (
                <MessageComposer
                  borderRadius={{ all: Amount.Least }}
                  margin={{ left: Amount.More }}
                />
              ),
              path: 'new',
            },
            {
              component: () => <Container>Starred</Container>,
              path: 'starred',
            },
            {
              component: () => <Container>Sent</Container>,
              path: 'sent',
            },
            {
              component: () => <Container>Drafts</Container>,
              path: 'drafts',
            },
            {
              component: () => <Container>Trash</Container>,
              path: 'trash',
            },
            {
              component: () => <Container>Chat thread</Container>,
              path: 'conversation/:id',
            },
          ]}
        />
      </Container>
    );
  },
);
