import { memo, ReactElement } from 'react';

import { Orientation } from '../../types';
import { Container, ContainerProps } from '../layout/Container';

export type ListItemProps = ContainerProps<HTMLLIElement>;

export const ListItem = memo(
  ({ as = 'li', children, ...props }: ListItemProps): ReactElement => {
    return (
      <Container
        as={as}
        style={{
          display: as === 'li' ? 'list-item' : 'flex',
        }}
        orientation={Orientation.Horizontal}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
