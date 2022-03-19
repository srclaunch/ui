import { memo, ReactElement } from 'react';

import { Orientation, Overflow } from '../../types';
import { Container, ContainerProps } from '../layout/Container';

export type ListItemProps = ContainerProps;

export const ListItem = memo(
  ({ as = 'li', children, ...props }: ListItemProps): ReactElement => {
    return (
      <Container
        alignment={{
          orientation: Orientation.Horizontal,
          overflow: Overflow.Visible,
        }}
        as={as}
        style={{
          display: as === 'li' ? 'list-item' : 'flex',
        }}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
