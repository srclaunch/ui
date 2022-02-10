import { memo, ReactElement } from 'react';

import { Container } from '../../layout/Container';

import { Amount, ContainerProps, Orientation } from '../../../types';

export const InputRow = memo(
  ({
    children,
    className = '',
    grow = false,
    marginBottom = Amount.More,
    orientation = Orientation.Vertical,
    ...props
  }: ContainerProps): ReactElement => {
    return (
      <Container
        className={`${className} input-row`}
        grow={grow}
        marginBottom={marginBottom}
        orientation={orientation}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
