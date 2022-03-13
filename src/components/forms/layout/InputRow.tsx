import { memo, ReactElement } from 'react';

import { Container } from '../../layout/Container';

import { Amount, ContainerProps, Orientation } from '../../../types';

export const InputRow = memo(
  ({
    children,
    className = '',
    margin = {},
    ...props
  }: ContainerProps): ReactElement => {
    return (
      <Container
        className={`${className} input-row`}
        margin={{ bottom: Amount.More, ...margin }}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
