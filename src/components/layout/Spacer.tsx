import { memo, ReactElement } from 'react';

import { Fill } from '../../types';
import { Container, ContainerProps } from '../layout/Container';

export type SpacerProps = ContainerProps;

export const Spacer = memo(
  ({
    alignment = {},
    as = 'div',
    children,
    ...props
  }: SpacerProps): ReactElement => {
    return (
      <Container
        alignment={{
          fill: Fill.Both,
          ...alignment,
        }}
        as={as}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
