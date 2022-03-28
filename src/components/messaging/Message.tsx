import { ReactElement, memo } from 'react';
import { ChatMessage } from '@srclaunch/types';
import { Container } from '../../components/layout/Container';

export const Message = memo(
  ({ body, subject, sender }: ChatMessage): ReactElement => {
    return <Container></Container>;
  },
);
