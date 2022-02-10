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
    backgroundColor = BackgroundColors.Default,
    borderRadius = Amount.Least,
    className = '',
    overflow = Overflow.ScrollVertical,
    width = 350,
    ...props
  }: ConversationListProps): ReactElement => {
    const items = new Array(5).fill(0);
    return (
      <Container
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        className={`${className} conversation-list`}
        grow={true}
        orientation={Orientation.Vertical}
        overflow={overflow}
        width={width}
        {...props}
      >
        {items.map((_, index) => {
          return (
            <NavigationLink to={`conversation/${index}`}>
              <MessagePreview
                backgroundColor={BackgroundColors.Default}
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
                borderRadius={Amount.None}
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
