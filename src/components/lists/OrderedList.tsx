import { memo, ReactElement } from 'react';

import { Container, ContainerProps } from '../layout/Container';
import { ListItemProps } from './ListItem';

export type OrderedListProps = {
  readonly items: readonly ListItemProps[];
} & ContainerProps<HTMLUListElement>;

export const OrderedList = memo(
  ({ as = 'ul', children, ...props }: OrderedListProps): ReactElement => {
    return (
      <Container as={as} {...props}>
        {children}
      </Container>
    );
  },
);
