import { ReactElement, memo } from 'react';
import { ChatMessage } from '@srclaunch/types';
import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  DepthShadow,
  Overflow,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { MessagePreview } from './MessagePreview';
import { NavigationLink } from '../navigation/NavigationLink';
import { Scrollable } from '../layout/Scrollable';

type ConversationListProps = ContainerProps;

export const ConversationList = memo(
  ({
    alignment = {},
    background = {},
    borderRadius = {},
    className = '',
    padding = {},
    size = {},
    ...props
  }: ConversationListProps): ReactElement => {
    const items = new Array(5).fill(0);
    return (
      <Container
        background={{ color: BackgroundColors.Light, ...background }}
        borderRadius={{ all: Amount.Least, ...borderRadius }}
        className={`${className} conversation-list`}
        size={{ width: 350, ...size }}
        shadow={DepthShadow.Low}
        {...props}
      >
        <Scrollable
          alignment={{ overflow: Overflow.ScrollVertical, ...alignment }}
          padding={{ all: Amount.Less, ...padding }}
        >
          {items.map((_, index) => {
            return (
              <NavigationLink to={`conversation/${index}`}>
                <MessagePreview
                  background={{ color: BackgroundColors.Lightest }}
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
                  margin={{
                    bottom: Amount.Least,
                  }}
                  sender={{
                    id: '0',
                    name: 'Yippy James',
                  }}
                  subject="Lorem ipsum "
                />
              </NavigationLink>
            );
          })}
        </Scrollable>
      </Container>
    );
  },
);
