import { ReactElement, memo } from 'react';
import { ChatMessage } from '@srclaunch/types';
import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
} from '../../../types';
import {
  Container,
  ContainerProps,
} from '../../../components/layout/Container';
import { MessagePreview } from './MessagePreview';

type ConversationProps = ContainerProps;

export const Conversation = memo(
  ({
    background = {},
    borderRadius = {},
    className = '',
  }: ConversationProps): ReactElement => {
    const items = new Array(5).fill(0);
    return (
      <Container
        borderRadius={{ all: Amount.Less, ...borderRadius }}
        className={`${className} conversation-list`}
        size={{ width: 350 }}
      >
        {items.map((_, index) => {
          return (
            <MessagePreview
              background={{ color: BackgroundColors.Lightest, ...background }}
              body="Lorem ipsum "
              border={{
                bottom: {
                  color: BorderColors.Light,

                  style: BorderStyle.Solid,
                  width: 1,
                },
              }}
              date={new Date().toISOString()}
              sender={{
                id: '0',
                name: 'Yippy James',
              }}
              subject="Lorem ipsum "
            />
          );
        })}
      </Container>
    );
  },
);
