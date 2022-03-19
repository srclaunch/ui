import { memo, ReactElement } from 'react';

import { Container, ContainerProps } from '../../layout/Container';

import { Amount } from '../../../types';

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
