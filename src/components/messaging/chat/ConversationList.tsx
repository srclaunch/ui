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
import { Container } from '../../layout/Container';
import { MessagePreview } from './MessagePreview';
import { NavigationLink } from '../../navigation/NavigationLink';

type ConversationListProps = ContainerProps;

export const ConversationList = memo(
  ({
    background = {},
    borderRadius = {},
    className = '',
    overflow = Overflow.ScrollVertical,
    size = {},
    ...props
  }: ConversationListProps): ReactElement => {
    const items = new Array(5).fill(0);
    return (
      <Container
        background={{ color: BackgroundColors.Default, ...background }}
        borderRadius={{ all: Amount.Least, ...borderRadius }}
        className={`${className} conversation-list`}
        overflow={overflow}
        size={{ width: 350, ...size }}
        {...props}
      >
        {items.map((_, index) => {
          return (
            <NavigationLink to={`conversation/${index}`}>
              <MessagePreview
                background={{ color: BackgroundColors.Default }}
                body="Lorem ipsum"
                border={
                  index !== items.length - 1
                    ? {
                        bottom: {
                          color: BorderColors.Light,
                          style: BorderStyle.Solid,
                          width: 1,
                        },
                      }
                    : undefined
                }
                date={new Date().toISOString()}
                sender={{
                  id: '0',
                  name: 'Yippy James',
                }}
                subject="Lorem ipsum "
              />
            </NavigationLink>
          );
        })}
      </Container>
    );
  },
);
