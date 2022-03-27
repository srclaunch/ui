import { memo, ReactElement } from 'react';

import { Fill } from '../../types';
import { Container, ContainerProps } from '../layout/Container';

export type SpacerProps = ContainerProps;

export const Spacer = memo(
  ({
    alignment = {},
    as = 'div',
    children,
    size = {},
    ...props
  }: SpacerProps): ReactElement => {
    return (
      <Container
        alignment={{
          ...alignment,
        }}
        as={as}
        size={{
          fill: Fill.Both,
          ...size,
        }}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
