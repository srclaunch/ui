import { ReactElement, memo } from 'react';
import { ChatMessage } from '@srclaunch/types';
import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Orientation,
  Overflow,
} from '../../../types';
import { Container, ContainerProps } from '../../layout/Container';
import { MessagePreview } from './MessagePreview';
import { NavigationLink } from '../../navigation/NavigationLink';

type ConversationListProps = ContainerProps;

export const ConversationList = memo(
  ({
    alignment = {},
    background = {},
    borderRadius = {},
    className = '',
    size = {},
    ...props
  }: ConversationListProps): ReactElement => {
    const items = new Array(5).fill(0);
    return (
      <Container
        alignment={{ overflow: Overflow.ScrollVertical, ...alignment }}
        background={{ color: BackgroundColors.Default, ...background }}
        borderRadius={{ all: Amount.Least, ...borderRadius }}
        className={`${className} conversation-list`}
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
