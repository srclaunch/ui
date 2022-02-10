import { ReactElement, memo } from 'react';
import { ChatMessage } from '@srclaunch/types';
import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  ContainerProps,
  Orientation,
  Overflow,
} from '../../../types';
import { Container } from '../../../components/layout/Container';
import { MessagePreview } from './MessagePreview';

type ConversationProps = ContainerProps;
export const Conversation = memo(
  ({
    borderRadius = Amount.Less,
    className = '',
  }: ConversationProps): ReactElement => {
    const items = new Array(5).fill(0);
    return (
      <Container
        borderRadius={borderRadius}
        className={`${className} conversation-list`}
        grow={false}
        orientation={Orientation.Vertical}
        overflow={Overflow.Hidden}
        width={350}
      >
        {items.map((_, index) => {
          return (
            <MessagePreview
              backgroundColor={BackgroundColors.Lightest}
              body="Lorem ipsum "
              border={{
                bottom: {
                  color: BorderColors.Light,

                  style: BorderStyle.Solid,
                  width: 1,
                },
              }}
              borderRadius={Amount.None}
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
